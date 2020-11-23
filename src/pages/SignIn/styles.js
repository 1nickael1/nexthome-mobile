import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container1 = styled.View`
  background-color: #26d0ce;
  height          : ${hp(46)}px;
  padding-left    : ${wp(5)}px;
  justify-content : center;
`;

export const Header = styled.Text`
  color     : #fff;
  font-size : ${wp(7)}px;
  fontFamily: 'Nunito-ExtraBold';
`;

export const Container2 = styled.View`
  background-color: #fff;
  height          : ${hp(57)}px;
  padding-top     : ${wp(8)}px;
  padding-left    : ${wp(5)}px;
  padding-right   : ${wp(5)}px;
`;

export const Container3 = styled.View`
  background-color: #fff;
  margin-top      : ${hp(4)}px;
  margin-bottom   : ${hp(6)}px;
`;

export const InputView = styled.View`
  flex-direction      : row;
  align-items         : center;
  border-bottom-width : ${wp(0.2)}px;
  border-color        : #666;
  margin-bottom       : ${hp(1)}px;
  padding-left        : ${hp(1)}px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width       : 90%;
  margin-left : 5px;
  font-size   : ${wp(3.5)}px;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  height          : ${hp(7)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(10)}px;
  margin-bottom   : ${hp(1)}px;
  border-radius   : ${wp(1.5)}px;
`;

export const TextButton = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #fff;
  font-family : 'Nunito-SemiBold';
`;

export const SignUpView = styled.TouchableOpacity`
  background-color: #fff;
  height          : ${hp(5)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(1)}px;
  margin-bottom   : ${hp(2)}px;
`;

export const TextSignUp = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #666;
  font-weight : 100;
  font-family : 'Nunito-Regular';
`;
