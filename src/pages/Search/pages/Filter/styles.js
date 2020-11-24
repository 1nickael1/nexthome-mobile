import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const FilterView = styled.View`
  flex                : 1;
  border-bottom-width : ${hp(.1)}px;
  border-bottom-color : #ddd;
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
  flex            : 1;
  height          : ${hp(5)}px;
  background-color: #26d0ce;
  border-radius   : ${wp(50)}px;
  justify-content : center;
  align-items     : center;
`;

export const ButtonSelectedText = styled.Text`
  font-size   : ${wp(3.5)}px;
  color       : #fff;
  font-family : 'Nunito-Regular';
`;