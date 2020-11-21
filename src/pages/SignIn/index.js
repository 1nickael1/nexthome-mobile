/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {TextInput, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {signin, getToken} from '../../services/auth';

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

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    const response = await getToken();
    if (response) {
      navigation.navigate('Menu');
    }
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleSignIn() {
    // navigation.navigate('Menu');
    const response = await signin({email, password});
    if (response) {
      navigation.navigate('Menu');
    }
  }

  return (
    <>
      <ScrollView>
        <Container1>
          <Header>Seja</Header>
          <Header>Bem-Vindo!</Header>
        </Container1>
        <Container2>
          <InputView>
            <MaterialCommunityIcons
              name="email-outline"
              color="#666"
              size={24}
            />
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
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#666"
              style={{width: '90%', marginLeft: 5}}
            />
          </InputView>
          <ButtonView onPress={() => handleSignIn()}>
            <TextButton>Login</TextButton>
          </ButtonView>
          <SignUpView onPress={() => handleNavigateToSignUp()}>
            <TextSignUp>É novo no app? Cadastre-se</TextSignUp>
          </SignUpView>
        </Container2>
      </ScrollView>
    </>
  );
};

export default SignIn;