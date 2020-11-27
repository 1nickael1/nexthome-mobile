import React from 'react';
import {Alert} from 'react-native';
import {logout, getToken} from '../../../services/auth';
import api from '../../../services/api';

import {Container, ButtonView, ButtonText} from './styles';

const Configs = ({navigation}) => {
  async function Logout() {
    await logout();
    navigation.navigate('SignIn');
  }

  function alertFotDelete() {
    Alert.alert('Deletar conta', 'Tem certeza que quer deletar sua conta?', [
      {
        text: 'Sim',
        onPress: () => {
          deleteAccount();
        },
      },
      {
        text: 'Cancelar',
      },
    ]);
  }

  async function deleteAccount() {
    const token = await getToken();
    await api
      .delete(`delete/user/${token}`)
      .then((e) => Logout())
      .catch((e) => console.log(e));
  }

  return (
    <Container>
      <ButtonView onPress={() => Logout()}>
        <ButtonText>Logout</ButtonText>
      </ButtonView>

      <ButtonView onPress={alertFotDelete}>
        <ButtonText>Deletar conta</ButtonText>
      </ButtonView>
    </Container>
  );
};

export default Configs;
