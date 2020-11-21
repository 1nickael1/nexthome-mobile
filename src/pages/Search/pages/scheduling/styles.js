import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${wp(5)}px;
  color: #000;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  width: ${wp(60)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(2)}px;
  align-self: center;
  margin-top: ${hp(5)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(4)}px;
  color: #fff;
  font-weight: bold;
`;
