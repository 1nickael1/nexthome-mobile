import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../../../../../../services/api';

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
    api
      .delete(`delete/visit/${visit.id}`)
      .then(() => navigation.pop(2))
      .catch((e) => console.log(e));
  }

  function confirmSolicitation() {
    api.put(`update/visit/${visit.id}/confirm`).then((e) => navigation.pop(2));
  }

  function goBack() {
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
        {visit.is_confirmed ? (
          <>
            <ButtonAcceptView onPress={goBack}>
              <ButtonAcceptText>Visita Confirmada</ButtonAcceptText>
            </ButtonAcceptView>
          </>
        ) : (
          <>
            <ButtonDenyView onPress={cancelSolicitation}>
              <ButtonDenyText>Recusar</ButtonDenyText>
            </ButtonDenyView>

            <ButtonAcceptView onPress={confirmSolicitation}>
              <ButtonAcceptText>Aceitar</ButtonAcceptText>
            </ButtonAcceptView>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default SolicitationsDetails;
