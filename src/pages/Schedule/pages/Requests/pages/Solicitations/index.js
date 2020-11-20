import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {Container, Content, VisitView, VisitButton} from './styles';

const Solicitations = ({route, navigation}) => {
  const {house_visit} = route.params;
  return (
    <Container>
      <ScrollView>
        <Content>
          {house_visit.map((e) => (
            <VisitView key={e.day_hour_visit}>
              <VisitButton>
                <Text>{e.user.name}</Text>
              </VisitButton>
            </VisitView>
          ))}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Solicitations;
