import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';

import {
  Container,
  Content,
  VisitView,
  VisitText,
  VisitButton,
  VisitButtonText,
} from './styles';

const Requests = ({navigation}) => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    getVisits();
  }, [isFocused]);

  async function getVisits() {
    setLoading(true);
    const id = await getToken();
    const {data} = await api.get(`visit/seller/${id}`);
    setVisits(data.houses);
    setLoading(false);
  }

  function navigateToSolicitations(house_visit, address) {
    navigation.navigate('SolicitationsIndex', {house_visit, address});
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          {loading ? (
            <ActivityIndicator size="large" color="#26d0ce" />
          ) : visits.length > 1 ? (
            visits.map((e) => (
              <VisitView key={e.id}>
                <VisitButton
                  onPress={() =>
                    navigateToSolicitations(e.house_visit, e.address)
                  }>
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
