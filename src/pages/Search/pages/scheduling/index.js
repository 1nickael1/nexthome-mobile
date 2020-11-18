import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../../../../services/api';
import {getToken} from '../../../../services/auth';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Container, Text, ButtonView, ButtonText} from './styles';

const Scheduling = ({route, navigation}) => {
  const {houseId, houseInfo} = route.params;
  const [options, setOptions] = useState([]);
  const [optionSelected, setOptionSelected] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHour();
  }, []);

  async function getHour() {
    const Year = new Date().getFullYear();
    const Month = new Date().getMonth() + 1;
    const Day = new Date().getDate();
    const {data} = await api.get(`available/days/${houseId}/20`);
    setOptions(data.dias);
  }

  async function confirmVisit() {
    setLoading(true);
    const token = await getToken();
    try {
      const {data} = await api.post(`register/visit/${houseId}/${token}`, {
        day_hour_visit: optionSelected,
        is_confirmed: false,
      });
      if (data) {
        Alert.alert('Sucesso', 'Sua visita foi agendada com sucesso', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SearchIndex'),
          },
        ]);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      Alert.alert('Ocorreu um erro', 'Tente novamente mais tarde');
    }
  }

  return (
    <Container>
      <Text>Selecione uma data e horario</Text>
      <Picker
        selectedValue={optionSelected}
        style={{height: hp(10), width: wp(60)}}
        onValueChange={(itemValue, itemIndex) => {
          setOptionSelected(itemValue);
        }}>
        {options.map((e) => (
          <Picker.Item key={e} label={e} value={e} />
        ))}
      </Picker>
      <ButtonView disabled={loading} onPress={() => confirmVisit()}>
        {loading ? (
          <ActivityIndicator size="large" color="#26d0ce" />
        ) : (
          <ButtonText>Solicitar Agendamento</ButtonText>
        )}
      </ButtonView>
    </Container>
  );
};

export default Scheduling;
