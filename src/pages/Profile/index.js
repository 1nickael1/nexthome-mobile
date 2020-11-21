import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
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
} from './styles';

const Profile = ({navigation}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const id = await getToken();
    const {data} = await api.get(`user/${id}`);
    setUser(data);
  }

  function navigateToConfig() {
    navigation.navigate('Configs');
  }

  const navigateToAnnounce = () => {
    navigation.navigate('Announce');
  };

  return (
    <Container>
      <IconButton onPress={() => navigateToConfig()}>
        <Ionicons name="settings-outline" size={35} color="#26d0ce" />
      </IconButton>
      <UserDescriptionBackground>
        <IconBackground>
          <Ionicons name="person-circle" size={90} color="#000" />
        </IconBackground>
        <UserDescriptionText>{user.name}</UserDescriptionText>
        <UserDescriptionText>{user.email}</UserDescriptionText>
        <UserDescriptionText>{user.cellphone}</UserDescriptionText>
      </UserDescriptionBackground>
      <InfoView>
        <Titles>Favoritos</Titles>
        <WithoutFav>Você ainda não favoritou</WithoutFav>
        <Titles>Anúncios</Titles>
        <WithoutFav>Você possui um imóvel parado? Então...</WithoutFav>
        <ButtonView onPress={navigateToAnnounce}>
          <ButtonText>Anuncie!</ButtonText>
        </ButtonView>
      </InfoView>
    </Container>
  );
};

export default Profile;
