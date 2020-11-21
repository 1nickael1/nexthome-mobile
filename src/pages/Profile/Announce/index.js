import React, {useState} from 'react';
import {View, TextInput, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {
  Container,
  Content,
  TitleView,
  Title,
  HourView,
  HourText,
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
            <Title>Preço</Title>
            <TextInput
              placeholder="R$"
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: 200,
              }}
              onChangeText={(text) => setPrice(text)}
              value={price}
              keyboardType="number-pad"
            />
          </TitleView>
          <TitleView>
            <Title>Tipo</Title>
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
            <Title>Endereço</Title>
            <TextInput
              placeholder="Endereço"
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: '100%',
              }}
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
            <TextInput
              placeholder="Descrição"
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: '100%',
              }}
              onChangeText={(text) => setDescription(text)}
              value={description}
            />
          </TitleView>
          <TitleView>
            <Title>Detalhes</Title>
            <TextInput
              placeholder="Quantidade de banheiros"
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: '100%',
              }}
              onChangeText={(text) => setNumber_bath(text)}
              value={number_bath}
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="Quantidade de quartos"
              style={{
                borderBottomColor: '#d3d3d3',
                borderBottomWidth: 1,
                alignSelf: 'center',
                width: '100%',
              }}
              onChangeText={(text) => setNumber_bedroom(text)}
              value={number_bedroom}
              keyboardType="number-pad"
            />
          </TitleView>
          <TitleView>
            <Title>Horário de Atendimento</Title>
            <HourView>
              <HourText>Das</HourText>
              <TextInput
                placeholder="00"
                maxLength={2}
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1,
                  alignSelf: 'center',
                  width: '20%',
                  textAlign: 'center',
                }}
                onChangeText={(text) => setInitial_hour(text)}
                value={initial_hour}
                keyboardType="number-pad"
              />
              <HourText>ás</HourText>
              <TextInput
                placeholder="00"
                maxLength={2}
                style={{
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1,
                  alignSelf: 'center',
                  width: '20%',
                  textAlign: 'center',
                }}
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
