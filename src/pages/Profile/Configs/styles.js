import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #fff;
  width: ${wp(60)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(2)}px;
  align-self: center;
  margin-top: ${hp(5)}px;
  border-width: ${wp(0.4)}px;
  border-color: #26d0ce;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(4)}px;
  color: #26d0ce;
  font-weight: bold;
`;
