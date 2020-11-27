import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const IconBackground = styled.View`
  background-color: #fff;
  width           : ${wp(30)}px;
  height          : ${wp(30)}px;
  border-radius   : ${wp(26)}px;
  justify-content : center;
  align-items     : center;
  top             : -${hp(7)}px;
`;

export const UserDescriptionBackground = styled.View`
  align-items     : center;
  background-color: #26d0ce;
  height          : ${hp(25)}px;
  margin-top      : ${hp(3)}px;
`;

export const UserDescriptionText = styled.Text`
  color     : #fff;
  font-size : ${wp(4)}px;
  margin-top: ${hp(1)}px;
  top       : -${hp(7)}px;
`;

export const LineView = styled.View`
  border-bottom-width: 0.5px;
  margin-bottom: ${hp(2)}px;
`;

export const Titles = styled.Text`
  color       : #818181;
  margin-left : ${wp(2)}px;
  font-size   : ${wp(4.5)}px;
  font-family : 'Nunito-Regular';
`;

export const WithoutFav = styled.Text`
  color         : #818181;
  text-align    : center;
  margin-bottom : ${hp(5)}px;
  font-size     : ${wp(4)}px;
  font-family   : 'Nunito-Regular';
`;

export const InfoView = styled.View`
  margin-top  : ${hp(5)}px;
  margin-left : ${wp(5)}px;
`;

export const IconButton = styled.TouchableOpacity`
  align-self  : flex-end;
  margin-right: ${wp(5)}px;
  margin-top  : ${wp(5)}px;
`;

export const CardView = styled.View`
  flex-direction: row;
  width         : ${wp(90)}px;
  height        : ${hp(15)}px;
  margin-top    : ${hp(3)}px;
  border-radius : ${wp(2)}px;
  border-width  : ${wp(0.1)}px;
  border-color  : #ddd;
`;

export const CardPhotoView = styled.View`
  flex: 2;
  background-color          : #000;
  border-top-left-radius    : ${wp(2)}px;
  border-top-right-radius   : ${wp(2)}px;
  border-bottom-left-radius : ${wp(2)}px;
`;

export const CardTextView = styled.View`
  flex        : 3;
  padding-top : ${hp(1)}px;
  padding-left: ${wp(2)}px;
`;

export const CardTextPrice = styled.Text`
  font-size     : ${wp(3)}px;
  padding-bottom: ${hp(.5)}px;
  font-family   : 'Nunito-Bold';
`;

export const CardText = styled.Text`
  font-size     : ${wp(3)}px;
  padding-bottom: ${hp(.5)}px;
  font-family   : 'Nunito-Regular';
`;

export const CardInfoEdit = styled.TouchableOpacity`
  flex                      : 1;
  align-self                : flex-end;
  height                    : ${hp(7)}px;
  border-color              : #26d0ce;
  border-width              : ${hp(.2)}px;
  border-top-left-radius    : ${wp(2)}px;
  border-bottom-right-radius: ${wp(2)}px;
  justify-content           : center;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #fff;
  width           : ${wp(60)}px;
  height          : ${hp(6)}px;
  justify-content : center;
  align-items     : center;
  border-radius   : ${wp(2)}px;
  align-self      : center;
  margin-top      : ${hp(1)}px;
  border-width    : ${wp(0.4)}px;
  border-color    : #26d0ce;
`;

export const ButtonText = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #26d0ce;
  font-weight : bold;
`;
