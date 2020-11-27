import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../../../services/api';
import {getToken} from '../../../services/auth';

import {
  Container,
  Content,
  TitleView,
  WithoutPhotoView,
  PhotoView,
  PhotoButton,
  PhotoButtonText,
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

const AnnounceEdit = ({route, navigation}) => {
  const {house} = route.params;

  const [price, setPrice] = useState('');
  const [to_sell, setTo_sell] = useState(true);
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [number_bath, setNumber_bath] = useState('');
  const [number_bedroom, setNumber_bedroom] = useState('');
  const [initial_hour, setInitial_hour] = useState('');
  const [final_hour, setFinal_hour] = useState('');
  const [land_size, setLand_size] = useState('');
  const [idAvailable, setIdAvailable] = useState();
  const [password, setPassword] = useState('');

  useEffect(() => {
    setHouse();
  }, []);

  function setHouse() {
    setPrice(house.price.toString());
    setTo_sell(house.to_sell);
    setAddress(house.address);
    setDescription(house.description);
    setNumber_bath(house.number_bath.toString());
    setNumber_bedroom(house.number_bedroom.toString());
    setInitial_hour(house.availables[0].initial_hour.toString());
    setFinal_hour(house.availables[0].final_hour.toString());
    setIdAvailable(house.availables[0].id);
    setLand_size(house.land_size);
  }

  async function updateHouse() {
    if (password.length === 0) {
      return Alert.alert('Erro', 'Preencha o campo de senha');
    }
    const token = await getToken();
    api
      .put(`update/house/${token}/${idAvailable}`, {
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
        password,
      })
      .then((e) =>
        Alert.alert('Sucesso', 'Casa atualizada com sucesso', [
          {text: 'OK', onPress: () => navigation.goBack()},
        ]),
      )
      .catch((e) =>
        Alert.alert(
          'Ocorreu um erro',
          'Verifique os campos. Sua senha está correta?',
        ),
      );
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <TitleView>
            <Title>Foto</Title>
            <WithoutPhotoView>
              <Ionicons name="image-outline" size={60} color="#98E7E6" />
            </WithoutPhotoView>

            <PhotoButton>
              <PhotoButtonText>Adicionar</PhotoButtonText>
            </PhotoButton>
          </TitleView>

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
            <Title>Metros quadrados</Title>
            <TextInput
              value={land_size}
              onChangeText={(text) => setLand_size(text)}
            />
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
            </DetailsView>

            <DetailsView>
              <DetailsText>Nº de quartos: </DetailsText>
              <TextInputDetails
                value={number_bedroom}
                onChangeText={(text) => setNumber_bedroom(text)}
                placeholder="1"
                keyboardType="number-pad"
              />
            </DetailsView>
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

          <TitleView>
            <Title>Digite sua senha</Title>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </TitleView>

          <ButtonView onPress={() => updateHouse()}>
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

export default AnnounceEdit;
