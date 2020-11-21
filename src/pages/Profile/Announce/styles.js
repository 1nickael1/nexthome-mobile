import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(2)}px;
`;

export const TitleView = styled.View`
  border-top-width: 1px;
  border-top-color: #d3d3d3;
  width: ${wp(80)}px;
  margin-top: ${hp(4)}px;
  padding-top: ${hp(2)}px;
`;

export const Title = styled.Text`
  font-size: ${wp(6)}px;
  color: #000;
`;

export const HourView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HourText = styled.Text`
  font-size: ${wp(5)}px;
  color: #000;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  height: ${hp(5)}px;
  width: ${wp(80)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${hp(8)}px;
  margin-bottom: ${hp(1)}px;
  border-radius: ${wp(2)}px;
`;

export const TextButton = styled.Text`
  font-size: ${wp(5)}px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonCancelView = styled.TouchableOpacity`
  background-color: #fff;
  border-width: ${wp(0.5)}px;
  border-color: #ff6767;
  height: ${hp(5)}px;
  width: ${wp(80)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp(3)}px;
  border-radius: ${wp(2)}px;
`;

export const TextCancelButton = styled.Text`
  font-size: ${wp(5)}px;
  color: #ff6767;
  font-weight: bold;
`;
