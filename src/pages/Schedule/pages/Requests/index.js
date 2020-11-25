import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';

import {Container, Content, VisitView, VisitText, VisitButton, VisitButtonText} from './styles';

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
              <>
                {e.house_visit.length > 0 ? (
                  <VisitView key={e.id}>
                    
                    <VisitText>
                      {new Date(e.house_visit[0].day_hour_visit).getDate()}/
                      {new Date(e.house_visit[0].day_hour_visit).getMonth() + 1}
                      {"\n"}
                      {new Date(e.house_visit[0].day_hour_visit).getUTCHours()}:
                      {new Date(e.house_visit[0].day_hour_visit).getMinutes() > 9
                        ? new Date(e.house_visit[0].day_hour_visit).getMinutes()
                        : `${new Date(e.house_visit[0].day_hour_visit).getMinutes()}0`}
                    </VisitText>

                    <VisitButton onPress={() => navigateToSolicitations(e.house_visit)}>
                      <VisitText>{e.address}</VisitText>
                    </VisitButton>
                  
                  </VisitView>
                ) : (<></>)}
              </>
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
