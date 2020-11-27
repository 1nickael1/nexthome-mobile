import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  flex            : 1;
`;

export const Content = styled.View`
  padding-left  : ${wp(5)}px;
  margin-top    : ${hp(2)}px;
  margin-bottom : ${hp(2)}px;
`;

export const VisitView = styled.View`
  width           : ${wp(80)}px;
  height          : ${hp(8)}px;
  margin-top      : ${hp(2)}px;
  margin-bottom   : ${hp(1.5)}px;
  flex-direction  : row;
  align-items     : center;
`;

export const VisitText = styled.Text`
  font-size   : ${wp(3.5)}px;
  font-family : 'Nunito-Regular';
  margin-right: ${wp(2)}px;
`;

export const VisitCancelButton = styled.TouchableOpacity`
  height                    : ${hp(9)}px;
  width                     : ${wp(10)}px;
  border-top-left-radius    : ${wp(1.5)}px;
  border-bottom-left-radius : ${wp(1.5)}px;
  background-color          : #FF8F8F;
  justify-content           : center;
  align-items               : center;
`;

export const VisitButton = styled.TouchableOpacity`
  flex-direction            : row;
  width                     : ${wp(66)}px;
  height                    : ${hp(9)}px;
  border-top-right-radius   : ${wp(1.5)}px;
  border-bottom-right-radius: ${wp(1.5)}px;
  padding-left              : ${wp(2)}px;
  padding-right             : ${wp(2)}px;
  background-color          : #A7F1F0;
`;

export const VisitButtonText = styled.Text`
  font-size   : ${wp(3.5)}px;
  font-family : 'Nunito-Regular';
`;
