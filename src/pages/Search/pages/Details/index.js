import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../../../services/api';

import {
  Container1,
  PhotoView,
  Container2,
  ContentView,
  ContentText,
  PriceText,
  ButtonView,
  ButtonText,
  SalesmanView,
  SalesmanInfoView,
  SalesmanText,
  SalesmanDescription,
  MoreDetails,
  TitleDetails,
  DescriptionView,
  LineView,
  DescriptionDetailsView,
  DescriptionDetailsText,
  DescriptionDetailsValueText,
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
        <Container1 />
        <PhotoView />

        <Container2>
          <ContentView>
            {loading ? (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="#00b6e3" size="large" />
              </View>
            ) : (
              <>
                <DescriptionView>
                  <PriceText>R$ {item.price}</PriceText>

                  <ContentText>{item.address}</ContentText>
                </DescriptionView>
                
                <SalesmanView>
                  <SalesmanInfoView>
                    <Ionicons name="person-circle" size={85} />
                    <View>
                      <SalesmanText style={{fontFamily: 'Nunito-Light'}}>Vendedor</SalesmanText>
                      <SalesmanText style={{fontFamily: 'Nunito-Regular'}}>{owner.name}</SalesmanText>
                      <SalesmanText style={{fontFamily: 'Nunito-ExtraLightItalic'}}>{owner.email}</SalesmanText>
                    </View>
                  </SalesmanInfoView>
                  <SalesmanDescription>"{item.description}"</SalesmanDescription>
                </SalesmanView>
                
                <MoreDetails>
                  <LineView>
                    <TitleDetails>Detalhes</TitleDetails>
                  </LineView>
                  
                  <DescriptionDetailsView>
                    <View>
                      <DescriptionDetailsText>Quartos</DescriptionDetailsText>
                      <DescriptionDetailsValueText>{item.number_bedroom}</DescriptionDetailsValueText>
                    </View>
                    
                    <View>
                      <DescriptionDetailsText>Banheiros</DescriptionDetailsText>
                      <DescriptionDetailsValueText>{item.number_bath}</DescriptionDetailsValueText>
                    </View>
                  </DescriptionDetailsView>
                  
                  <DescriptionDetailsView>
                    <View>
                      <DescriptionDetailsText>Área (m²)</DescriptionDetailsText>
                      <DescriptionDetailsValueText>{item.land_size}</DescriptionDetailsValueText>
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
        </Container2>
      </ScrollView>
    </>
  );
};

export default Details;
