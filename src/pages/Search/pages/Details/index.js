import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../../../services/api';

import {
  PhotoView,
  Container,
  ContentView,
  ContentText,
  PriceText,
  ButtonView,
  ButtonText,
  SalesmanView,
  SalesmanText,
  MoreDetails,
  TitleDetails,
  DescriptionView,
  LineView,
  DescriptionDetailsText,
  DescriptionDetailsView,
} from './styles';

const Details = ({route, navigation}) => {
  const {id, item} = route.params;

  const [hour, sethour] = useState();
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(item.owner);

  useEffect(() => {
    getAvailable();
  }, []);

  async function getAvailable() {
    api
      .get(`available/${id}`)
      .then((response) => {
        sethour(response.data[0].availables[0]);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }

  function goToScheduling() {
    navigation.navigate('Scheduling', {
      houseId: id,
      houseInfo: item,
    });
  }

  return (
    <>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <PhotoView />
        <Container>
          <ContentView>
            {loading ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="#00b6e3" size="large" />
              </View>
            ) : (
              <>
                <DescriptionView>
                  <PriceText>{item.price}</PriceText>

                  <ContentText>{item.description}</ContentText>
                  <ContentText>{item.address}</ContentText>
                </DescriptionView>
                <SalesmanView>
                  <Ionicons name="person-circle" size={60} />
                  <View>
                    <SalesmanText>{owner.name}</SalesmanText>
                    <SalesmanText>{owner.email}</SalesmanText>
                  </View>
                </SalesmanView>
                <MoreDetails>
                  <LineView>
                    <TitleDetails>Detalhes</TitleDetails>
                  </LineView>
                  <DescriptionDetailsView>
                    <View>
                      <DescriptionDetailsText>Quartos</DescriptionDetailsText>
                      <DescriptionDetailsText>
                        {item.number_bedroom}
                      </DescriptionDetailsText>
                    </View>
                    <View>
                      <DescriptionDetailsText>Banheiros</DescriptionDetailsText>
                      <DescriptionDetailsText>
                        {item.number_bath}
                      </DescriptionDetailsText>
                    </View>
                  </DescriptionDetailsView>
                  <DescriptionDetailsView>
                    <View>
                      <DescriptionDetailsText>
                        Metros Quadrados
                      </DescriptionDetailsText>
                      <DescriptionDetailsText>
                        {item.land_size}
                      </DescriptionDetailsText>
                    </View>
                  </DescriptionDetailsView>
                </MoreDetails>
                {hour ? (
                  <>
                    <ButtonView onPress={() => goToScheduling()}>
                      <ButtonText>Agendar Visita</ButtonText>
                    </ButtonView>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </ContentView>
        </Container>
      </ScrollView>
    </>
  );
};

export default Details;
