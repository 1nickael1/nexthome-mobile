import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

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

const Announce = () => {
  const [price, setPrice] = useState('');
  const [to_sell, setTo_sell] = useState(true);
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [number_bath, setNumber_bath] = useState('');
  const [number_bedroom, setNumber_bedroom] = useState('');
  const [initial_hour, setInitial_hour] = useState('');
  const [final_hour, setFinal_hour] = useState('');

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
          
          <ButtonView>
            <TextButton>Confirmar</TextButton>
          </ButtonView>
          
          <ButtonCancelView>
            <TextCancelButton>Cancelar</TextCancelButton>
          </ButtonCancelView>
          
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Announce;
