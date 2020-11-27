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

  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPass, setEmptyPass] = useState(false);

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

  function checkEmptyInputs() {
    let one = false;

    if (email.length    == 0) { one = true; setEmptyEmail(true); }
    if (password.length == 0) { one = true; setEmptyPass(true); }

    if (one) return;
    handleSignIn();
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
            <InputView focus={onFocusEmail} empty={emptyEmail}>
              <MaterialCommunityIcons 
                name="email-outline" 
                color={emptyEmail ? '#FF6767' : (onFocusEmail ? "#1C9E9C" : "#818181")} 
                size={24} />
              <TextInput
                value={email}
                onChangeText={(text) => {setEmail(text); setEmptyEmail(false);}}
                placeholder="E-mail"
                focus={onFocusEmail}
                empty={emptyEmail}
                onFocus={() => setOnFocusEmail(true)}
                onBlur={() => setOnFocusEmail(false)}
              />
            </InputView>

            <InputView focus={onFocusPass} empty={emptyPass}>
              <MaterialCommunityIcons 
                name="key-outline" 
                color={emptyPass ? '#FF6767' : (onFocusPass ? "#1C9E9C" : "#818181")} 
                size={24} 
              />
              <TextInput
                value={password}
                onChangeText={(text) => {setPassword(text); setEmptyPass(false);}}
                secureTextEntry
                placeholder="Senha"
                focus={onFocusPass}
                empty={emptyPass}
                onFocus={() => setOnFocusPass(true)}
                onBlur={() => setOnFocusPass(false)}
              />
            </InputView>
          </Container3>

          <ButtonContainer>
            <ButtonView onPress={() => checkEmptyInputs()} underlayColor="#1C9E9C">
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
