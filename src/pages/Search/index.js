/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';

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

const Search = ({navigation}) => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    getHouses();
  }, [isFocused]);

  async function getHouses() {
    setLoading(true);
    const {data} = await api.get('houses');
    setHouses(data);
    setLoading(false);
  }

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

  return (
    <>
      <Container>
        <HeaderView>
          <SearchView>
            <SearchInput />
            <SearchButton>
              <MaterialIcons name="search" size={34} color="#666" />
            </SearchButton>
            <SearchButton onPress={() => navigateToFilter()}>
              <OptionsView>
                <Ionicons name="options-outline" size={34} color="#666" />
              </OptionsView>
            </SearchButton>
          </SearchView>
        </HeaderView>
        {loading ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color="#00b6e3" size="large" />
          </View>
        ) : (
          <Content>
            <FlatList
              data={houses}
              renderItem={flatRenderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </Content>
        )}
      </Container>
    </>
  );
};

export default Search;
