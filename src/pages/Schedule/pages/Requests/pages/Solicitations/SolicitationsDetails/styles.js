import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex            : 1.5;
  justify-content : center;
  background-color: #26d0ce;
  padding-left    : ${wp(5)}px; 
  padding-right   : ${wp(5)}px; 
`;

export const HeaderText = styled.Text`
  font-size   : ${wp(5)}px;
  color       : #fff;
  font-family : 'Nunito-Regular';
`;

export const HourView = styled.View`
  flex                : 1.3;
  justify-content     : center;
  align-items         : center;
  border-bottom-width : ${hp(.1)}px;
  border-bottom-color : #ddd;
`;

export const HourText = styled.Text`
  font-size     : ${wp(4)}px;
  color         : #4C4C4C;
  font-family   : 'Nunito-Regular';
  margin-bottom : ${hp(2)}px;;
`;

export const UserView = styled.View`
  flex        : 2;
  align-items : center;
`;

export const UserText = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #4C4C4C;
  font-family : 'Nunito-Regular';
`;

export const ButtonContainer = styled.View`
  flex            : 1;
  flex-direction  : row;
  justify-content : space-evenly;
  align-items     : center;
  padding-left    : ${wp(5)}px; 
  padding-right   : ${wp(5)}px; 
`;

export const ButtonAcceptView = styled.TouchableOpacity`
  justify-content : center;
  align-items     : center;
  height          : ${hp(8)}px;
  width           : ${wp(40)}px;
  border-width    : ${wp(.4)}px;
  border-color    : #26d0ce;
  border-radius   : ${wp(1.5)}px;
`;

export const ButtonAcceptText = styled.Text`
  font-size   : ${wp(4.5)}px;
  color       : #26d0ce;
  font-family : 'Nunito-Regular';
`;

export const ButtonDenyView = styled.TouchableOpacity`
  justify-content : center;
  align-items     : center;
  height          : ${hp(8)}px;
  width           : ${wp(40)}px;
  border-width    : ${wp(.3)}px;
  border-color    : #ff6767;
  border-radius   : ${wp(1.5)}px;
`;

export const ButtonDenyText = styled.Text`
  font-size   : ${wp(4.5)}px;
  color       : #ff6767;
  font-family : 'Nunito-Regular';
`;