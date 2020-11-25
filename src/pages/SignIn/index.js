/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {signin, getToken} from '../../services/auth';

import {
  Container,
  HeaderContainer,
  Container2,
  Container3,
  Header,
  SignUpView,
  TextSignUp,
  InputView,
  TextInput,
  ButtonContainer,
  ButtonView,
  TextButton,
  TextSignUpBlue,
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
    const response = await signin({email, password});
    if (response) {
      navigation.navigate('Menu');
    }
  }

  return (
    <Container behavior="height">
      <ScrollView>
        <HeaderContainer>
          <Header>Seja</Header>
          <Header>Bem-Vindo!</Header>
        </HeaderContainer>

        <Container2>

          <Container3>
            <InputView>
              <MaterialCommunityIcons name="email-outline" color="#666" size={24} />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="E-mail"
              />
            </InputView>

            <InputView>
              <MaterialCommunityIcons name="key-outline" color="#666" size={24} />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                placeholder="Senha"
              />
            </InputView>
          </Container3>

          <ButtonContainer>
            <ButtonView onPress={() => handleSignIn()}>
              <TextButton>Login</TextButton>
            </ButtonView>
            
            <SignUpView onPress={() => handleNavigateToSignUp()}>
              <TextSignUp>É novo no app?
                <TextSignUpBlue> Cadastre-se</TextSignUpBlue>
              </TextSignUp>
            </SignUpView>
          </ButtonContainer>
          
        </Container2>
      </ScrollView>
    </ Container>
  );
};

export default SignIn;
