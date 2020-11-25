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
  ButtonDenyText,
} from './styles';

const SolicitationsDetails = ({route, navigation}) => {
  const {visit, address} = route.params;

  function cancelSolicitation() {
    navigation.pop(2);
  }

  return (
    <Container>
      <Header>
        {address !== undefined ? <HeaderText>{address}</HeaderText> : null}
      </Header>

      <HourView>
        <HourText>Solicitação de Agendamento: </HourText>
        <HourText>
          {new Date(visit.day_hour_visit).getUTCDate()}/
          {new Date(visit.day_hour_visit).getMonth() + 1}/
          {new Date(visit.day_hour_visit).getFullYear()} -{' '}
          {new Date(visit.day_hour_visit).getUTCHours()}:
          {new Date(visit.day_hour_visit).getMinutes() > 9
            ? new Date(visit.day_hour_visit).getMinutes()
            : `${new Date(visit.day_hour_visit).getMinutes()}0`}
        </HourText>
      </HourView>

      <UserView>
        <Ionicons name="person-circle" size={110} color="#000" />

        <UserText>{visit.user.name}</UserText>
        <UserText>{visit.user.email}</UserText>
        <UserText>{visit.user.cellphone}</UserText>
      </UserView>

      <ButtonContainer>
        <ButtonDenyView onPress={cancelSolicitation}>
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
