import React from 'react';
import {logout} from '../../../services/auth';

import {Container, ButtonView, ButtonText} from './styles';

const Configs = ({navigation}) => {
  async function Logout() {
    await logout();
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <ButtonView onPress={() => Logout()}>
        <ButtonText>Logout</ButtonText>
      </ButtonView>

      <ButtonView>
        <ButtonText>Deletar conta</ButtonText>
      </ButtonView>
    </Container>
  );
};

export default Configs;
