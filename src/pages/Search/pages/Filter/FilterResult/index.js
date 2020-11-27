/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback, use, useMemo} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../../../../services/api';

import {
  Container,
  HeaderView,
  SearchView,
  SearchInput,
  OptionsView,
  SearchButton,
  Content,
  CardView,
  CardPhotoView,
  PriceText,
  CardTextView,
  CardTextDescription,
} from './styles';

const FilterResult = ({route, navigation}) => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  const {filterData} = route.params;

  useEffect(() => {
    getHouses();
  }, [isFocused]);

  const getHouses = async () => {
    setLoading(true);
    const {data} = await api.put('houses', filterData);
    setHouses(data);
    setLoading(false);
  };

  function navigateToDetails({id, item, image}) {
    navigation.navigate('DetailIndex', {
      screen: 'Detail',
      params: {id, item, image},
    });
  }

  function navigateToFilter() {
    navigation.navigate('Filter');
  }

  const FlatItem = ({price, address, to_sell, id, item, image}) => (
    <CardView onPress={() => navigateToDetails({id, item, image})}>
      {image !== undefined ? (
        <Image
          source={{uri: `${image.url}`}}
          style={{height: 200, width: '100%'}}
          resizeMode={'contain'}
        />
      ) : (
        <CardPhotoView />
      )}
      <CardTextView>
        <PriceText>R${price}</PriceText>
        <CardTextDescription>{address}</CardTextDescription>
        <CardTextDescription>
          {to_sell ? 'Venda' : 'Aluguel'}
        </CardTextDescription>
      </CardTextView>
    </CardView>
  );

  const flatRenderItem = ({item}) => (
    <FlatItem
      price={item.price}
      address={item.address}
      to_sell={item.to_sell}
      id={item.id}
      item={item}
      image={item.house_picture[0]}
    />
  );

  if (loading) {
    return (
      <Container>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color="#00b6e3" size="large" />
          </View>
        </Content>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {houses.length > 0 ? (
          <Content>
            <FlatList
              data={houses}
              renderItem={flatRenderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </Content>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <Text>Sem resutados para os filtros selecionados.</Text>
          </View>
        )}
      </Container>
    </>
  );
};

export default FilterResult;
