import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { 
  Container,
  Header,
  HeaderText,
  HourView,
  HourText,
  UserView,
  UserText,
  ButtonContainer,
  ButtonAcceptView,
  ButtonAcceptText,
  ButtonDenyView,
  ButtonDenyText
} from './styles';

const SolicitationsDetails = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Endereço</HeaderText>
      </Header>

      <HourView>
        <HourText>Solicitação de Agendamento: </HourText>
        <HourText>Dia útil - Hora</HourText>
      </HourView>

      <UserView>
        <Ionicons name="person-circle" size={110} color="#000" />

        <UserText>Nome</UserText>
        <UserText>E-mail</UserText>
        <UserText>Telefone</UserText>
      </UserView>

      <ButtonContainer>
        <ButtonDenyView>
          <ButtonDenyText>Recusar</ButtonDenyText>
        </ButtonDenyView>

        <ButtonAcceptView>
          <ButtonAcceptText>Aceitar</ButtonAcceptText>
        </ButtonAcceptView>
      </ButtonContainer>
    </Container>
  );
};

export default SolicitationsDetails;
