import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container1 = styled.View`
  background-color: #26d0ce;
  height: ${hp(50)}px;
  padding-top: ${hp(10)}px;
  padding-left: ${wp(5)}px;
`;

export const Header = styled.Text`
  color: #fff;
  font-size: ${wp(8)}px;
  font-weight: bold;
`;
export const Container2 = styled.View`
  background-color: #fff;
  height: ${hp(50)}px;
  padding-top: ${wp(8)}px;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  height: ${hp(5)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${hp(8)}px;
  margin-bottom: ${hp(3)}px;
  border-radius: ${wp(2)}px;
`;

export const TextButton = styled.Text`
  font-size: ${wp(5)}px;
  color: #fff;
  font-weight: bold;
`;

export const SignUpView = styled.TouchableOpacity`
  background-color: #fff;
  height: ${hp(5)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${hp(3)}px;
  margin-bottom: ${hp(3)}px;
  border-radius: ${wp(2)}px;
  border-width: ${wp(0.3)}px;
  border-color: #26d0ce;
`;

export const TextSignUp = styled.Text`
  font-size: ${wp(4)}px;
  color: #666;
  font-weight: 100;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${wp(0.3)}px;
  border-color: #666;
`;
