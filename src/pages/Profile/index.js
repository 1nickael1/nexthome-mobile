import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import {getToken} from '../../services/auth';

import {
  Container,
  IconBackground,
  UserDescriptionBackground,
  UserDescriptionText,
  Titles,
  WithoutFav,
  InfoView,
  ButtonText,
  ButtonView,
  IconButton,
  LineView,
  CardView,
  CardPhotoView,
  CardTextView,
  CardTextPrice,
  CardText,
  CardInfoEdit,
} from './styles';

const Profile = ({navigation}) => {
  const [user, setUser] = useState({});
  const [houses, setHouses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInfo();
    getHouses();
  }, []);

  async function getInfo() {
    const id = await getToken();
    const {data} = await api.get(`user/${id}`);
    setUser(data);
  }

  async function getHouses() {
    const id = await getToken();
    const {data} = await api.get(`houses/user/${id}`);
    setHouses(data);
    setLoading(false);
  }

  function navigateToConfig() {
    navigation.navigate('Configs');
  }

  const navigateToAnnounce = () => {
    navigation.navigate('Announce');
  };

  function navigateToDetails({id, item, image}) {
    navigation.navigate('DetailIndex', {
      screen: 'Detail',
      params: {id, item},
    });
  }

  const FlatItemHouse = ({price, address, to_sell, id, item, image}) => (
    <CardView>
      <CardPhotoView />
      <CardTextView>
        <CardTextPrice>R$ {price}</CardTextPrice>
        <CardText>{address}</CardText>
      </CardTextView>
      <CardInfoEdit>
        <Ionicons name="pencil-outline" size={40} color="#26d0ce" style={{marginLeft:8}}/>
      </CardInfoEdit>
    </CardView>
  );

  const flatRenderItem = ({item}) => (
    <FlatItemHouse
      price={item.price}
      address={item.address}
      to_sell={item.to_sell}
      id={item.id}
      item={item}
      // image={item.house_picture[0]}
    />
  );

  return (
    <Container>
      <ScrollView>

        <IconButton onPress={() => navigateToConfig()}>
          <Ionicons name="settings-outline" size={35} color="#26d0ce" />
        </IconButton>
        
        <UserDescriptionBackground>
          <IconBackground>
            <Ionicons name="person-circle" size={130} color="#000" />
          </IconBackground>
          <UserDescriptionText>{user.name}</UserDescriptionText>
          <UserDescriptionText>{user.email}</UserDescriptionText>
          <UserDescriptionText>{user.cellphone}</UserDescriptionText>
        </UserDescriptionBackground>
        
        <InfoView>
          <LineView>
            <Titles>Favoritos</Titles>
          </LineView>
          <WithoutFav>Você ainda não favoritou</WithoutFav>
          
          <LineView>
            <Titles>Anúncios</Titles>
          </LineView>
          
          {loading ? (
            <View>
              <WithoutFav>Você possui um imóvel parado? Então...</WithoutFav>
              
              <ButtonView onPress={navigateToAnnounce}>
                <ButtonText>Anuncie!</ButtonText>
              </ButtonView>
            </View>
          ) : (
            <View>
              <ButtonView onPress={navigateToAnnounce}>
                <ButtonText>Anuncie mais!</ButtonText>
              </ButtonView>

              <FlatList 
                data={houses}
                renderItem={flatRenderItem}
                keyExtractor={(item => item.id.toString())}
              />
            </View>
          )}
          
        </InfoView>
        </ScrollView>
    </Container>
  );
};

export default Profile;
