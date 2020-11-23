import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
  justify-content : center;
  align-items     : center;
`;

export const Text = styled.Text`
  color       : #000;
  font-size   : ${wp(5)}px;
  font-family : 'Nunito-Bold';
`;

export const ButtonView = styled.TouchableOpacity`
  background-color  : #26d0ce;
  height            : ${hp(7)}px;
  width             : ${wp(80)}px;
  justify-content   : center;
  align-items       : center;
  margin-top        : ${hp(5)}px;
  margin-horizontal : ${wp(5)}px;
  border-radius     : ${wp(1.5)}px;
`;

export const ButtonText = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #fff;
  font-family : 'Nunito-SemiBold';
`;
