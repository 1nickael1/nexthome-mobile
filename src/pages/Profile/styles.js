import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const IconBackground = styled.View`
  background-color: #fff;
  width: ${wp(23)}px;
  height: ${hp(12)}px;
  border-radius: ${wp(25)}px;
  justify-content: center;
  align-items: center;
  top: -${hp(7)}px;
`;

export const UserDescriptionBackground = styled.View`
  align-items: center;
  background-color: #26d0ce;
  height: ${hp(20)}px;
  margin-top: ${hp(3)}px;
`;

export const UserDescriptionText = styled.Text`
  color: #fff;
  font-size: ${wp(4)}px;
  margin-top: ${hp(1)}px;
  top: -${hp(7)}px;
`;

export const Titles = styled.Text`
  font-size: ${wp(5)}px;
  color: #999;
`;

export const WithoutFav = styled.Text`
  font-size: ${wp(4)}px;
  color: #999;
  text-align: center;
  margin-bottom: ${hp(5)}px;
`;

export const InfoView = styled.View`
  margin-top: ${hp(5)}px;
  margin-left: ${wp(5)}px;
`;

export const IconButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: ${wp(5)}px;
  margin-top: ${wp(5)}px;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #fff;
  width: ${wp(60)}px;
  height: ${hp(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(2)}px;
  align-self: center;
  margin-top: ${hp(5)}px;
  border-width: ${wp(0.4)}px;
  border-color: #26d0ce;
`;

export const ButtonText = styled.Text`
  font-size: ${wp(4)}px;
  color: #26d0ce;
  font-weight: bold;
`;
