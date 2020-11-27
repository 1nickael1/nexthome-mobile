import React, {useState} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../../../services/api';
import {getToken} from '../../../services/auth';

import {
  Container,
  Content,
  TitleView,
  Title,
  ButtonSelected,
  ButtonSelectedText,
  ButtonNotSelectedView,
  ButtonNotSelectedText,
  TextInput,
  DescriptionInput,
  DetailsView,
  TextInputDetails,
  DetailsText,
  HourView,
  HourText,
  HourInput,
  ButtonView,
  TextButton,
  ButtonCancelView,
  TextCancelButton,
} from './styles';

const Announce = ({navigation}) => {
  const [price          , setPrice          ] = useState('');
  const [to_sell        , setTo_sell        ] = useState(true);
  const [address        , setAddress        ] = useState('');
  const [description    , setDescription    ] = useState('');
  const [number_bath    , setNumber_bath    ] = useState('');
  const [number_bedroom , setNumber_bedroom ] = useState('');
  const [initial_hour   , setInitial_hour   ] = useState('');
  const [final_hour     , setFinal_hour     ] = useState('');
  const [land_size      , setLand_size      ] = useState('');

  const [onFocusPrice         , setOnFocusPrice       ] = useState(false);
  const [onFocusAddress       , setOnFocusAddress     ] = useState(false);
  const [onFocusDescription   , setOnFocusDescription ] = useState(false);
  const [onFocusNumberBath    , setOnFocusNBaths      ] = useState(false);
  const [onFocusNumberBedroom , setOnFocusNBeds       ] = useState(false);
  const [onFocusInitHour      , setOnFocusInitHour    ] = useState(false);
  const [onFocusFinHour       , setOnFocusFinHour     ] = useState(false);

  const [emptyPrice   , setEmptyPrice   ] = useState(false);
  const [emptyAddress , setEmptyAddress ] = useState(false);
  const [emptyNBath   , setEmptyNBaths  ] = useState(false);
  const [emptyNBedroom, setEmptyNBeds   ] = useState(false);
  const [emptyInitHour, setEmptyInitHour] = useState(false);
  const [emptyFinHour , setEmptyFinHour ] = useState(false);

  function checkEmptyInputs() {
    let one = false;

    if (price.length          == 0) { one = true; setEmptyPrice(true);   }
    if (address.length        == 0) { one = true; setEmptyAddress(true); }
    if (number_bath.length    == 0) { one = true; setEmptyNBaths(true);  }
    if (number_bedroom.length == 0) { one = true; setEmptyNBeds(true);   }
    if (initial_hour.length   == 0) { one = true; setEmptyInitHour(true);}
    if (final_hour.length     == 0) { one = true; setEmptyFinHour(true); }

    if (one) return;
    createHouse();
  }

  async function createHouse() {
    const token = await getToken();
    api
      .post(`register/house/${token}`, {
        land_size,
        price,
        address,
        description,
        number_bedroom,
        number_bath,
        to_sell,
        initial_hour,
        final_hour,
        day_week: 3,
      })
      .then((e) =>
        Alert.alert('Sucesso', 'Casa cadastrada com sucesso', [
          {text: 'OK', onPress: () => navigation.goBack()},
        ]),
      )
      .catch((e) => Alert.alert('Ocorreu um erro', `${e}`));
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          
          <TitleView>
            <Title>Para:</Title>
            
            <View style={{flexDirection: 'row'}}>
              { to_sell ? (
                <>
                  <ButtonSelected>
                    <ButtonSelectedText>Venda</ButtonSelectedText>
                  </ButtonSelected>
                  <ButtonNotSelectedView onPress={() => setTo_sell(false)}>
                    <ButtonNotSelectedText>Aluguel</ButtonNotSelectedText>
                  </ButtonNotSelectedView>
                </>
              ) : (
                <>
                  <ButtonNotSelectedView onPress={() => setTo_sell(true)}>
                    <ButtonNotSelectedText>Venda</ButtonNotSelectedText>
                  </ButtonNotSelectedView>
                  <ButtonSelected>
                    <ButtonSelectedText>Aluguel</ButtonSelectedText>
                  </ButtonSelected>
                </>
              )}
            </View>
          </TitleView>

          <TitleView>
            <Title>Preço</Title>
            <TextInput
              value={price}
              onChangeText={(text) => {setPrice(text); setEmptyPrice(false);}}
              placeholder="R$"
              keyboardType="number-pad"
              focus={onFocusPrice}
              empty={emptyPrice}
              onFocus={() => setOnFocusPrice(true)}
              onBlur={() => setOnFocusPrice(false)}
            />
          </TitleView>
          
          <TitleView>
            <Title>Endereço</Title>
            <TextInput
              value={address}
              onChangeText={(text) => {setAddress(text); setEmptyAddress(false);}}
              placeholder="Endereço"
              focus={onFocusAddress}
              empty={emptyAddress}
              onFocus={() => setOnFocusAddress(true)}
              onBlur={() => setOnFocusAddress(false)}
            />
          </TitleView>
          
          <TitleView>
            <Title>Descrição do Vendedor</Title>
            <DescriptionInput
              value={description}
              onChangeText={(text) => {setDescription(text); setEmptyAddress(false);}}
              placeholder="Descrição"
              multiline={true}
              numberoflines={8}
              focus={onFocusDescription}
              onFocus={() => setOnFocusDescription(true)}
              onBlur={() => setOnFocusDescription(false)}
            />
          </TitleView>
          
          <TitleView>
            <Title>Detalhes</Title>
            
            <DetailsView>
              <DetailsText>Nº de banheiros: </DetailsText>
              <TextInputDetails
                value={number_bath}
                onChangeText={(text) => {setNumber_bath(text); setEmptyNBaths(false);}}
                placeholder="1"
                keyboardType="number-pad"
                focus={onFocusNumberBath}
                empty={emptyNBath}
                onFocus={() => setOnFocusNBaths(true)}
                onBlur={() => setOnFocusNBaths(false)}
              />
            </ DetailsView>
            
            <DetailsView>
              <DetailsText>Nº de quartos: </DetailsText>
              <TextInputDetails
                value={number_bedroom}
                onChangeText={(text) => {setNumber_bedroom(text); setEmptyNBeds(false);}}
                placeholder="1"
                keyboardType="number-pad"
                focus={onFocusNumberBedroom}
                empty={emptyNBedroom}
                onFocus={() => setOnFocusNBeds(true)}
                onBlur={() => setOnFocusNBeds(false)}
              />
            </ DetailsView>
          </TitleView>
          
          <TitleView>
            <Title>Horário de Atendimento</Title>
            <HourView>
              <HourText>Das</HourText>
              <HourInput
                placeholder="00"
                maxLength={2}
                onChangeText={(text) => {setInitial_hour(text); setEmptyInitHour(false);}}
                value={initial_hour}
                keyboardType="number-pad"
                focus={onFocusInitHour}
                empty={emptyInitHour}
                onFocus={() => setOnFocusInitHour(true)}
                onBlur={() => setOnFocusInitHour(false)}
              />
              <HourText>ás</HourText>
              
              <HourInput
                placeholder="00"
                maxLength={2}
                onChangeText={(text) => {setFinal_hour(text); setEmptyFinHour(false);}}
                value={final_hour}
                keyboardType="number-pad"
                focus={onFocusFinHour}
                empty={emptyFinHour}
                onFocus={() => setOnFocusFinHour(true)}
                onBlur={() => setOnFocusFinHour(false)}
              />
            </HourView>
          </TitleView>

          <ButtonView onPress={() => checkEmptyInputs()}>
            <TextButton>Confirmar</TextButton>
          </ButtonView>
          
          <ButtonCancelView onPress={() => navigation.goBack()}>
            <TextCancelButton>Cancelar</TextCancelButton>
          </ButtonCancelView>
          
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Announce;
