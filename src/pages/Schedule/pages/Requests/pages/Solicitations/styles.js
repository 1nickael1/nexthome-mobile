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

export const VisitView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${hp(2)}px;
  width: ${wp(80)}px;
  height: ${hp(8)}px;
  flex-direction: row;
`;

export const VisitButton = styled.TouchableOpacity`
  background-color: #70d9d7;
  width: ${wp(70)}px;
  height: ${hp(8)}px;
  border-radius: ${wp(5)}px;
  justify-content: center;
  align-items: center;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;
