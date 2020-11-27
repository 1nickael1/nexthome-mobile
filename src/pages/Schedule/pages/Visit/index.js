import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Content,
  VisitView,
  VisitButton,
  VisitText,
  VisitButtonText,
  VisitCancelButton,
} from './styles';

const Visit = () => {
  const [visits, setVisits] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    getVisits();
  }, [isFocused]);

  async function getVisits() {
    const id = await getToken();
    const {data} = await api.get(`visit/user/${id}`);
    setVisits(data);
  }

  async function deleteVisit(id) {
    Alert.alert('Deletar visita', 'Deseja mesmo deletar esta visita?', [
      {
        text: 'Sim',
        onPress: () =>
          api.delete(`delete/visit/${id}`).then((e) => getVisits()),
      },
      {
        text: 'Cancelar',
      },
    ]);
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          {visits.length > 0 ? (
            visits.map((e) => (
              <VisitView key={e.id}>
                <VisitText>
                  {new Date(e.day_hour_visit).getDate()}/
                  {new Date(e.day_hour_visit).getMonth() + 1}
                  {'\n'}
                  {new Date(e.day_hour_visit).getUTCHours()}:
                  {new Date(e.day_hour_visit).getMinutes() > 9
                    ? new Date(e.day_hour_visit).getMinutes()
                    : `${new Date(e.day_hour_visit).getMinutes()}0`}
                </VisitText>

                <VisitCancelButton onPress={() => deleteVisit(e.id)}>
                  <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color="#fff"
                  />
                </VisitCancelButton>

                <VisitButton>
                  <VisitButtonText>{e.house?.address}</VisitButtonText>
                </VisitButton>
              </VisitView>
            ))
          ) : (
            <Text>Sem visitas no momento.</Text>
          )}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Visit;
