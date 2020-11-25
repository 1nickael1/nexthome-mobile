import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const Content = styled.View`
  align-items   : center;
  margin-top    : ${hp(2)}px;
  margin-bottom : ${hp(2)}px;
`;

export const TitleView = styled.View`
  width           : ${wp(100)}px;
  border-top-width: ${hp(0.1)}px;
  border-top-color: #ddd;
  padding-top     : ${hp(2)}px;
  padding-left    : ${wp(5)}px;
  padding-bottom  : ${hp(7)}px;
`;

export const Title = styled.Text`
  color         : #616161;
  margin-bottom : ${hp(1)}px;
  font-size     : ${wp(4.5)}px;
  font-family   : 'Nunito-SemiBold';
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width               : ${wp(90)}px;
  margin-top          : ${hp(2)}px;
  border-bottom-width : ${hp(0.1)}px;
  border-bottom-color : #d3d3d3;
  font-size           : ${wp(3.8)}px;
  font-family         : 'Nunito-Regular';
`;

export const DetailsView = styled.View`
  flex-direction: row;
  margin-top    : ${hp(2)}px;
`;

export const DetailsText = styled.Text`
  color       : #000;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const TextInputDetails = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width               : ${wp(20)}px;
  border-bottom-width : ${hp(0.1)}px;
  border-bottom-color : #d3d3d3;
  font-size           : ${wp(3.8)}px;
  font-family         : 'Nunito-Regular';
`;

export const HourView = styled.View`
  flex-direction  : row;
  align-items     : center;
  justify-content : center;
`;

export const HourText = styled.Text`
  color       : #000;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const HourInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width               : ${wp(20)}px;
  border-bottom-color : #d3d3d3;
  border-bottom-width : ${hp(0.1)}px;
  align-self          : center;
  text-align          : center;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  height          : ${hp(7)}px;
  width           : ${wp(80)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(1)}px;
  margin-bottom   : ${hp(1)}px;
  border-radius   : ${wp(1.5)}px;
`;

export const TextButton = styled.Text`
  color       : #fff;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-SemiBold';
`;

export const ButtonCancelView = styled.TouchableOpacity`
  border-color    : #ff6767;
  border-width    : ${wp(0.3)}px;
  height          : ${hp(7)}px;
  width           : ${wp(80)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(2)}px;
  margin-bottom   : ${hp(1)}px;
  border-radius   : ${wp(1.5)}px;
`;

export const TextCancelButton = styled.Text`
  color       : #ff6767;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-SemiBold';
`;
