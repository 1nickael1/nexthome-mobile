/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
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

  useEffect(() => {
    getHouses();
  }, []);

  async function getHouses() {
    const {data} = await api.get('houses');
    setHouses(data);
    setLoading(false);
  }

  function navigateToDetails({id, item, image}) {
    navigation.navigate('DetailIndex', {
      screen: 'Detail',
      params: {id, item},
    });
    // console.log(image[0].url);
  }

  const FlatItem = ({price, address, to_sell, id, item, image}) => (
    <CardView onPress={() => navigateToDetails({id, item, image})}>
      <CardPhotoView />
      {/* {image.lenght > 0 ??
        image.map((e) => <CardPhotoView source={{uri: e.url}} />)} */}
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
      image={item.house_picture}
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
            <SearchButton>
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
