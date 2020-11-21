import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const PhotoView = styled.View`
  background-color: #000;
  height: ${hp(30)}px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${hp(5)}px;
  margin-bottom: ${hp(5)}px;
`;

export const ContentView = styled.View``;

export const DescriptionView = styled.View`
  width: ${wp(80)}px;
  align-self: center;
`;

export const ContentText = styled.Text`
  font-size: ${wp(3)}px;
  margin-top: ${wp(1)}px;
`;

export const PriceText = styled.Text`
  font-size: ${wp(4)}px;
  font-weight: bold;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  width: ${wp(90)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(2)}px;
  align-self: center;
  margin-top: ${hp(5)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(4)}px;
  color: #fff;
  font-weight: bold;
`;

export const SalesmanView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp(5)}px;
  background-color: #eafbfb;
  width: ${wp(100)}px;
  padding-left: ${wp(3)}px;
`;

export const SalesmanText = styled.Text`
  font-size: ${wp(4)}px;
  color: #000;
`;

export const MoreDetails = styled.View`
  margin-top: ${hp(5)}px;
  width: ${wp(90)}px;
  align-self: center;
`;

export const LineView = styled.View`
  border-bottom-width: 0.5px;
`;

export const TitleDetails = styled.Text`
  font-size: ${wp(6)}px;
  color: #000;
  /* font-weight: bold; */
`;

export const DescriptionDetailsText = styled.Text`
  font-size: ${wp(4)}px;
  color: #000;
`;

export const DescriptionDetailsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${wp(60)}px;
  margin-top: ${hp(2)}px;
`;
