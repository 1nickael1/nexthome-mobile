import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const Content = styled.View`
  align-items   : center;
  padding-left  : ${wp(5)}px;
  padding-right : ${wp(5)}px;
`;

export const VisitView = styled.View`
  width           : ${wp(80)}px;
  height          : ${hp(8)}px;
  margin-top      : ${hp(4)}px;
  flex-direction  : row;
  align-items     : center;
  justify-content : space-between;
`;

export const VisitButton = styled.TouchableOpacity`
  width           : ${wp(77)}px;
  height          : ${hp(9)}px;
  border-radius   : ${wp(1.5)}px;
  justify-content : center;
  align-items     : center;
  background-color: #ffdbbb;
`;

export const VisitText = styled.Text`
  font-size   : ${wp(4)}px;
  color       : #000;
  font-family : 'Nunito-Regular';
`;
