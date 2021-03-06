import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color    : #fff;
  width               : ${wp(100)}px;
  height              : ${hp(10)}px;
  justify-content     : center;
  align-items         : center;
  border-radius       : ${wp(2)}px;
  border-bottom-width : ${wp(0.4)}px;
  border-bottom-color : #ddd;
`;

export const ButtonText = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #818181;
  font-family : 'Nunito-Regular';
`;
