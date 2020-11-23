import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  flex            : 1;
`;

export const HeaderView = styled.View`
  border-color          : #26d0ce;
  border-bottom-width   : ${wp(0.3)}px; 
  height                : ${hp(11)}px;
  padding-top           : ${hp(3)}px;
  padding-left          : ${wp(5)}px;
  padding-bottom        : ${wp(2)}px;
  flex-direction        : row;
`;

export const HeaderText = styled.Text`
  color           : #818181;
  padding-right   : ${wp(22)}px;
  font-size       : ${wp(5)}px;
  font-family     : 'Nunito-Bold';
  justify-content : center;
`;

export const BackButton = styled.TouchableOpacity`
   
`;

export const Content = styled.View`
  margin-top      : ${wp(20)}px;
  margin-left     : ${wp(5)}px;
  margin-right    : ${wp(5)}px;
  justify-content : space-between;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width       : 90%;
  margin-left : 5px;
  font-size   : ${wp(3.5)}px;
`;

export const InputView = styled.View`
  flex-direction      : row;
  align-items         : center;
  border-bottom-width : ${wp(0.2)}px;
  border-color        : #666;
  margin-bottom       : ${hp(1.5)}px;
  padding-left        : ${hp(1)}px;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color  : #26d0ce;
  height            : ${hp(7)}px;
  justify-content   : center;
  align-items       : center;
  margin-top        : ${hp(27)}px;
  margin-bottom     : ${hp(1)}px;
  margin-horizontal : ${wp(5)}px;
  border-radius     : ${wp(1.5)}px;
`;

export const TextButton = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #fff;
  font-family : 'Nunito-SemiBold';
`;
