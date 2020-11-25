import React, {useEffect, useState} from 'react';
import {ScrollView, Alert, KeyboardAvoidingView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  HeaderView,
  HeaderText,
  BackButton,
  InputView,
  TextInput,
  Content,
  ButtonContainer,
  ButtonView,
  TextButton,
} from './styles';

const SignUp = ({navigation}) => {
  const [name           , setName           ] = useState('');
  const [email          , setEmail          ] = useState('');
  const [phone          , setPhone          ] = useState('');
  const [password       , setPassword       ] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameOnFocus            , setNameOnFocus            ] = useState(false);
  const [emailOnFocus           , setEmailOnFocus           ] = useState(false);
  const [phoneOnFocus           , setPhoneOnFocus           ] = useState(false);
  const [passwordOnFocus        , setPasswordOnFocus        ] = useState(false);
  const [confirmPasswordOnFocus , setConfirmPasswordOnFocus ] = useState(false);

  const [nameEmpty            , setNameEmpty            ] = useState(false);
  const [emailEmpty           , setEmailEmpty           ] = useState(false);
  const [phoneEmpty           , setPhoneEmpty           ] = useState(false);
  const [passwordEmpty        , setPasswordEmpty        ] = useState(false);
  const [confirmPasswordEmpty , setConfirmPasswordEmpty ] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  function checkEmptyFields() {
    let one = false;

    if (name.length             == 0) { one = true; setNameEmpty(true);}
    if (email.length            == 0) { one = true; setEmailEmpty(true);}
    if (phone.length            == 0) { one = true; setPhoneEmpty(true);}
    if (password.length         == 0) { one = true; setPasswordEmpty(true);}
    if (confirmPassword.length  == 0) { one = true; setConfirmPasswordEmpty(true);}

    if (one) return;
    handleSignUp();
  }

  async function handleSignUp() {
    try {
      const {data} = await api.post('register/user', {
        name,
        email,
        password,
        cellphone: phone,
      });
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso, efetue o login', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (e) {
      Alert.alert('Ocorreu um erro', `${e}`);
    }
  }

  return (
    <Container>
      <ScrollView>
        <HeaderView>
          
          <BackButton onPress={() => handleGoBack()}>
            <HeaderText>
              <MaterialCommunityIcons name="arrow-left" size={30} color="#818181" />
            </HeaderText>
          </BackButton>
          
          <HeaderText>Cadastro</HeaderText>
        </HeaderView>
        
        <Content>

          <InputView focus={nameOnFocus} empty={nameEmpty}>
            <MaterialIcons 
              name="person-outline" 
              color={nameEmpty ? '#FF6767' : (nameOnFocus ? "#1C9E9C" : "#818181")} 
              size={24} 
            />
            <TextInput
              value={name}
              onChangeText={(text) => {setName(text); setNameEmpty(false);}}
              placeholder="Nome"
              focus={nameOnFocus}
              empty={nameEmpty}
              onFocus={() => setNameOnFocus(true)}
              onBlur={() => setNameOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={emailOnFocus} empty={emailEmpty}>
            <MaterialCommunityIcons 
              name="email-outline" 
              color={emailEmpty ? '#FF6767' : (emailOnFocus ? "#1C9E9C" : "#818181")} 
              size={24} 
            />
            <TextInput
              value={email}
              onChangeText={(text) => {setEmail(text); setEmailEmpty(false);}}
              placeholder="E-mail"
              focus={emailOnFocus}
              empty={emailEmpty}
              onFocus={() => setEmailOnFocus(true)}
              onBlur={() => setEmailOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={phoneOnFocus} empty={phoneEmpty}>
            <MaterialCommunityIcons 
              name="phone-outline" 
              color={phoneEmpty ? '#FF6767' : (phoneOnFocus ? "#1C9E9C" : "#818181")} 
              size={24} 
            />
            <TextInput
              value={phone}
              onChangeText={(text) => {setPhone(text); setPhoneEmpty(false);}}
              placeholder="Telefone"
              keyboardType="phone-pad"
              focus={phoneOnFocus}
              empty={phoneEmpty}
              onFocus={() => setPhoneOnFocus(true)}
              onBlur={() => setPhoneOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={passwordOnFocus} empty={passwordEmpty}>
            <MaterialCommunityIcons 
              name="key-outline" 
              color={passwordEmpty ? '#FF6767' : (passwordOnFocus ? "#1C9E9C" : "#818181")} 
              size={24} 
            />
            <TextInput
              value={password}
              onChangeText={(text) => {setPassword(text); setPasswordEmpty(false);}}
              placeholder="Senha"
              secureTextEntry
              focus={passwordOnFocus}
              empty={passwordEmpty}
              onFocus={() => setPasswordOnFocus(true)}
              onBlur={() => setPasswordOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={confirmPasswordOnFocus} empty={confirmPasswordEmpty}>
            <MaterialCommunityIcons 
              name="key-outline" 
              color={confirmPasswordEmpty ? '#FF6767' : (confirmPasswordOnFocus ? "#1C9E9C" : "#818181")} 
              size={24} 
            />
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => {setConfirmPassword(text); setConfirmPasswordEmpty(false);}}
              placeholder="Confirmar Senha"
              secureTextEntry
              focus={confirmPasswordOnFocus}
              empty={confirmPasswordEmpty}
              onFocus={() => setConfirmPasswordOnFocus(true)}
              onBlur={() => setConfirmPasswordOnFocus(false)}
            />
          </InputView>
        </Content>
        
        <ButtonContainer>
          <ButtonView onPress={() => checkEmptyFields()} underlayColor="#1C9E9C">
            <TextButton>Salvar</TextButton>
          </ButtonView>
        </ButtonContainer>

      </ ScrollView>
    </Container>
  );
};

export default SignUp;
