import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';

import {Container, Content, VisitView, VisitButton, VisitText} from './styles';

const Requests = ({navigation}) => {
  const [visits, setVisits] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    getVisits();
  }, [isFocused]);

  async function getVisits() {
    const id = await getToken();
    const {data} = await api.get(`visit/seller/${id}`);
    setVisits(data.houses);
  }

  function navigateToSolicitations(house_visit) {
    navigation.navigate('SolicitationsIndex', {house_visit});
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          {visits.length > 1 ? (
            visits.map((e) => (
              <VisitView key={e.id}>
                <VisitButton
                  onPress={() => navigateToSolicitations(e.house_visit)}>
                  <VisitText>{e.address}</VisitText>
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

export default Requests;
