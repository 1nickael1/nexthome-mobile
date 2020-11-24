import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../../../services/api';
import {getToken} from '../../../services/auth';

import {
  Container,
  Content,
  TitleView,
  Title,
  TextInput,
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
  const [price, setPrice] = useState('');
  const [to_sell, setTo_sell] = useState(true);
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [number_bath, setNumber_bath] = useState('');
  const [number_bedroom, setNumber_bedroom] = useState('');
  const [initial_hour, setInitial_hour] = useState('');
  const [final_hour, setFinal_hour] = useState('');
  const [land_size, setLand_size] = useState('');

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
            <Picker
              selectedValue={to_sell}
              onValueChange={(itemValue, itemIndex) => {
                setTo_sell(itemValue);
              }}>
              <Picker.Item label="Venda" value={true} />
              <Picker.Item label="Aluguel" value={false} />
            </Picker>
          </TitleView>

          <TitleView>
            <Title>Preço</Title>
            <TextInput
              value={price}
              onChangeText={(text) => setPrice(text)}
              placeholder="R$"
              keyboardType="number-pad"
            />
          </TitleView>
          
          <TitleView>
            <Title>Endereço</Title>
            <TextInput
              value={address}
              onChangeText={(text) => setAddress(text)}
              placeholder="Endereço"
            />
            <TextInput
              value={description}
              onChangeText={(text) => setDescription(text)}
              placeholder="Descrição"
            />
          </TitleView>
          
          <TitleView>
            <Title>Detalhes</Title>
            
            <DetailsView>
              <DetailsText>Nº de banheiros: </DetailsText>
              <TextInputDetails
                value={number_bath}
                onChangeText={(text) => setNumber_bath(text)}
                placeholder="1"
                keyboardType="number-pad"
              />
            </ DetailsView>
            
            <DetailsView>
              <DetailsText>Nº de quartos: </DetailsText>
              <TextInputDetails
                value={number_bedroom}
                onChangeText={(text) => setNumber_bedroom(text)}
                placeholder="1"
                keyboardType="number-pad"
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
                onChangeText={(text) => setInitial_hour(text)}
                value={initial_hour}
                keyboardType="number-pad"
              />
              <HourText>ás</HourText>
              
              <HourInput
                placeholder="00"
                maxLength={2}
                onChangeText={(text) => setFinal_hour(text)}
                value={final_hour}
                keyboardType="number-pad"
              />
            </HourView>
          </TitleView>
          <ButtonView onPress={() => createHouse()}>
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
