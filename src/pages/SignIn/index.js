/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container1,
  Container2,
  Header,
  ButtonView,
  TextButton,
  SignUpView,
  TextSignUp,
  InputView,
} from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Container1>
        <Header>Seja</Header>
        <Header>Bem-Vindo!</Header>
      </Container1>
      <Container2>
        <InputView>
          <MaterialCommunityIcons name="email-outline" color="#666" size={24} />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="E-mail"
            placeholderTextColor="#666"
            style={{width: '90%', marginLeft: 5}}
          />
        </InputView>
        <InputView>
          <MaterialCommunityIcons name="key-outline" color="#666" size={24} />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Senha"
            placeholderTextColor="#666"
            style={{width: '90%', marginLeft: 5}}
          />
        </InputView>
        <ButtonView>
          <TextButton>Login</TextButton>
        </ButtonView>
        <SignUpView>
          <TextSignUp>É novo no app? Cadastre-se</TextSignUp>
        </SignUpView>
      </Container2>
    </>
  );
};

export default SignIn;
