import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';

import {Container, Content, VisitView, VisitButton} from './styles';

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

  return (
    <Container>
      <ScrollView>
        <Content>
          {visits.length > 1 ? (
            visits.map((e) => (
              <VisitView key={e.id}>
                <View>
                  <Text>
                    {new Date(e.day_hour_visit).getDate()}/
                    {new Date(e.day_hour_visit).getMonth() + 1}
                  </Text>
                  <Text>
                    {new Date(e.day_hour_visit).getUTCHours()}:
                    {new Date(e.day_hour_visit).getMinutes() > 9
                      ? new Date(e.day_hour_visit).getMinutes()
                      : `${new Date(e.day_hour_visit).getMinutes()}0`}
                  </Text>
                </View>
                <VisitButton>
                  <Text>{e.house?.address}</Text>
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
