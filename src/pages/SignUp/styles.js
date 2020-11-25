import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const HeaderView = styled.View`
  border-color          : #26d0ce;
  border-bottom-width   : ${wp(0.3)}px;
  padding-top           : ${hp(2)}px;
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
  height          : ${hp(80)}px;
  padding-left    : ${wp(5)}px;
  padding-right   : ${wp(5)}px;
  justify-content : center;
  align-items     : center;
`;

export const InputView = styled.View`
  flex-direction      : row;
  align-items         : center;
  border-bottom-width : ${wp(0.2)}px;
  border-color        : ${props => props.focus ? '#1C9E9C' : '#666'};
  margin-bottom       : ${hp(1.5)}px;
  padding-left        : ${hp(1)}px;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.focus ? '#1C9E9C' : '#666',
}))`
  width       : ${wp(80)}px;
  padding-left: ${wp(3)}px;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const ButtonContainer = styled.View`
  justify-content   : center;
  padding-horizontal: ${wp(5)}px;
`;

export const ButtonView = styled.TouchableHighlight`
  background-color  : #26d0ce;
  height            : ${hp(7)}px;
  border-radius     : ${wp(1.5)}px;
  justify-content   : center;
  align-items       : center;
`;

export const TextButton = styled.Text`
  font-size   : ${wp(4.2)}px;
  color       : #fff;
  font-family : 'Nunito-SemiBold';
`;
