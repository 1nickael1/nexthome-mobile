import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Container, Content, VisitView, VisitButton, VisitText} from './styles';

const Solicitations = ({route, navigation}) => {
  const {house_visit, address} = route.params;

  function navigateToDetails(e) {
    navigation.navigate('SolicitationsDetails', {visit: e, address});
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          {house_visit.map((e) => (
            <VisitView key={e.day_hour_visit}>
              <VisitButton onPress={() => navigateToDetails(e)}>
                <VisitText>{e.user.name}</VisitText>
              </VisitButton>
            </VisitView>
          ))}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Solicitations;
