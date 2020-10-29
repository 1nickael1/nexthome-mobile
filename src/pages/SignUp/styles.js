import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderView = styled.View`
  background-color: #00b6e3;
  height: ${hp(25)}px;
  padding-top: ${hp(5)}px;
  padding-left: ${wp(5)}px;
  padding-bottom: ${wp(5)}px;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: ${wp(8)}px;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${wp(20)}px;
`;

export const Content = styled.View`
  padding-top: ${wp(8)}px;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  width: 90%;
  margin-left: 5px;
  font-size: ${wp(5)}px;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${wp(0.3)}px;
  border-color: #666;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #00b6e3;
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
