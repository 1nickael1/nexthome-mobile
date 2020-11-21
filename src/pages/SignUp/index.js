import React, {useEffect, useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  HeaderView,
  HeaderText,
  BackButton,
  TextInput,
  InputView,
  Content,
  ButtonView,
  TextButton,
} from './styles';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
              <MaterialCommunityIcons
                name="arrow-left"
                size={44}
                color="#FFF"
              />
            </HeaderText>
          </BackButton>
          <HeaderText>Cadastro</HeaderText>
        </HeaderView>
        <Content>
          <InputView>
            <MaterialIcons name="person-outline" color="#666" size={24} />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Nome"
            />
          </InputView>
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
            />
          </InputView>
          <InputView>
            <MaterialCommunityIcons
              name="phone-outline"
              color="#666"
              size={24}
            />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Telefone"
            />
          </InputView>
          <InputView>
            <MaterialCommunityIcons name="key-outline" color="#666" size={24} />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Senha"
              secureTextEntry
            />
          </InputView>
          <InputView>
            <MaterialCommunityIcons name="key-outline" color="#666" size={24} />
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              placeholder="Confirmar Senha"
              secureTextEntry
            />
          </InputView>
          <ButtonView onPress={() => handleSignUp()}>
            <TextButton>Salvar</TextButton>
          </ButtonView>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default SignUp;
