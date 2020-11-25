import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const ConfirmView = styled.View`
  padding-top   : ${hp(3)}px;
  padding-bottom: ${hp(3)}px;
  padding-left  : ${wp(5)}px; 
  padding-right : ${wp(5)}px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  height          : ${hp(7)}px;
  justify-content : center;
  align-items     : center;
  border-width    : ${hp(.2)}px;
  border-color    : #26d0ce;
  border-radius   : ${wp(1.5)}px;
`;

export const ConfirmText = styled.Text`
  font-size   : ${wp(4.2)}px; 
  color       : #26d0ce;
  font-family : 'Nunito-Regular';
`;

export const FilterView = styled.View`
  height              : ${hp(19.43)}px;
  border-top-width    : ${hp(.1)}px;
  border-top-color    : #ddd;
  padding-left        : ${wp(5)}px;
  padding-right       : ${wp(5)}px;
  padding-top         : ${hp(2)}px;
  padding-bottom      : ${hp(3)}px;
`;

export const Title = styled.Text`
  flex          : 1;
  font-size     : ${wp(4.5)}px;
  color         : #666;
  font-family   : 'Nunito-Regular';
`;

export const PriceView = styled.View`
  flex-direction  : row;
  justify-content : space-evenly;
`;

export const PriceInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width               : ${wp(40)}px;
  border-bottom-width : ${hp(.1)}px;
  border-bottom-color : #818181;
  font-family         : 'Nunito-Regular';
`;

export const ButtonContainer = styled.View`
  flex          : 1; 
  flex-direction: row;
`;

export const ButtonView = styled.TouchableOpacity`
  flex            : 1;
  height          : ${hp(5)}px;
  background-color: #fff;
  justify-content : center;
  align-items     : center;
`;

export const ButtonText = styled.Text`
  font-size   : ${wp(3.5)}px;
  color       : #818181;
  font-family : 'Nunito-Regular';
`;

export const ButtonSelected = styled.TouchableOpacity`
  flex            : 1.2;
  height          : ${hp(5)}px;
  background-color: #26d0ce;
  border-radius   : ${wp(50)}px;
  justify-content : center;
  align-items     : center;
`;

export const ButtonSelectedText = styled.Text`
  font-size   : ${wp(3.7)}px;
  color       : #fff;
  font-family : 'Nunito-Regular';
`;