import api from './api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function signin({email, password}) {
  try {
    const {data} = await api.post('login', {
      email,
      password,
    });
    await AsyncStorage.setItem('@nexthometoken', JSON.stringify(data));
    return data;
  } catch (err) {
    Alert.alert('Ocorreu um erro', `${err}`);
  }
}

export async function getToken() {
  try {
    const value = await AsyncStorage.getItem('@nexthometoken');
    if (value !== null) {
      return value;
    }
  } catch (err) {
    await AsyncStorage.removeItem('@nexthometoken');
    return false;
  }
}

export async function logout() {
  await AsyncStorage.removeItem('@nexthometoken');
}
