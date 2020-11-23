import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container1 = styled.View`
  background-color: #26d0ce;
  height          : ${hp(30)}px;
  width           : 100%;
  margin-bottom   : ${hp(5)}px;
`;

export const PhotoView = styled.View`
  background-color: #000;
  height          : ${hp(30)}px;
  width           : 95%;
  border-radius   : ${wp(5)}px
  margin-top      : ${hp(5)}px;
  margin-left     : ${wp(2.5)}px;
  position        : absolute;
`;

export const Container2 = styled.View`
  flex          : 1;
  align-items   : center;
  padding-top   : ${hp(5)}px;
  margin-bottom : ${hp(5)}px;
`;

export const ContentView = styled.View``;

export const DescriptionView = styled.View`
  padding-left: ${wp(5)}px;
`;

export const PriceText = styled.Text`
  font-size   : ${wp(4.5)}px;
  font-family: 'Nunito-Bold';
`;

export const ContentText = styled.Text`
  margin-top: ${wp(1)}px;
  font-size : ${wp(3.5)}px;
  font-family: 'Nunito-Regular';
`;

export const SalesmanView = styled.View`
  margin-top      : ${hp(5)}px;
  background-color: #eafbfb;
  padding-top     : ${hp(1)}px;
  padding-bottom  : ${hp(2)}px;
  padding-left    : ${wp(5)}px;
`;
  
export const SalesmanInfoView = styled.View`
  flex-direction  : row;
  align-items     : center;
  width           : ${wp(100)}px;
`;

export const SalesmanText = styled.Text`
  font-size : ${wp(4)}px;
  color     : #000;
`;

export const SalesmanDescription = styled.Text`
  color           : #000;
  margin-top      : ${hp(3)}px;
  font-size       : ${wp(4)}px;
  font-family     : 'Nunito-Regular';
`;

export const MoreDetails = styled.View`
  margin-top: ${hp(5)}px;
  width     : ${wp(90)}px;
  align-self: center;
`;

export const LineView = styled.View`
  border-bottom-width: 0.5px;
`;

export const TitleDetails = styled.Text`
  color       : #000;
  font-size   : ${wp(5.2)}px;
  font-family : 'Nunito-Regular';
`;

export const DescriptionDetailsView = styled.View`
  flex-direction  : row;
  justify-content : space-between;
  width           : ${wp(60)}px;
  margin-top      : ${hp(2)}px;
`;

export const DescriptionDetailsText = styled.Text`
  color       : #000;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const DescriptionDetailsValueText = styled.Text`
  font-size   : ${wp(3.8)}px;
  font-family : 'Nunito-Light';
`;

export const ButtonView = styled.TouchableOpacity`
  background-color  : #26d0ce;
  height            : ${hp(7)}px;
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