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

  function handleGoBack() {
    navigation.goBack();
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

          <InputView focus={nameOnFocus}>
            <MaterialIcons 
              name="person-outline" 
              color={nameOnFocus ? "#1C9E9C" : "#818181"} 
              size={24} 
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Nome"
              focus={nameOnFocus}
              onFocus={() => setNameOnFocus(true)}
              onBlur={() => setNameOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={emailOnFocus}>
            <MaterialCommunityIcons 
              name="email-outline" 
              color={emailOnFocus ? "#1C9E9C" : "#818181"} 
              size={24} 
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="E-mail"
              focus={emailOnFocus}
              onFocus={() => setEmailOnFocus(true)}
              onBlur={() => setEmailOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={phoneOnFocus}>
            <MaterialCommunityIcons 
              name="phone-outline" 
              color={phoneOnFocus ? "#1C9E9C" : "#818181"} 
              size={24} 
            />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Telefone"
              keyboardType="phone-pad"
              focus={phoneOnFocus}
              onFocus={() => setPhoneOnFocus(true)}
              onBlur={() => setPhoneOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={passwordOnFocus}>
            <MaterialCommunityIcons 
              name="key-outline" 
              color={passwordOnFocus ? "#1C9E9C" : "#818181"} 
              size={24} 
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Senha"
              secureTextEntry
              focus={passwordOnFocus}
              onFocus={() => setPasswordOnFocus(true)}
              onBlur={() => setPasswordOnFocus(false)}
            />
          </InputView>
          
          <InputView focus={confirmPasswordOnFocus}>
            <MaterialCommunityIcons 
              name="key-outline" 
              color={confirmPasswordOnFocus ? "#1C9E9C" : "#818181"} 
              size={24} 
            />
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Confirmar Senha"
              secureTextEntry
              focus={confirmPasswordOnFocus}
              onFocus={() => setConfirmPasswordOnFocus(true)}
              onBlur={() => setConfirmPasswordOnFocus(false)}
            />
          </InputView>
        </Content>
        
        <ButtonContainer>
          <ButtonView onPress={() => handleSignUp()} underlayColor="#1C9E9C">
            <TextButton>Salvar</TextButton>
          </ButtonView>
        </ButtonContainer>

      </ ScrollView>
    </Container>
  );
};

export default SignUp;
