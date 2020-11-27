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
  margin-top    : ${hp(2)}px;
  margin-bottom : ${hp(2)}px;
`;

export const TitleView = styled.View`
  width           : ${wp(100)}px;
  border-top-width: ${hp(0.1)}px;
  border-top-color: #ddd;
  padding-top     : ${hp(2)}px;
  padding-left    : ${wp(5)}px;
  padding-bottom  : ${hp(7)}px;
`;

export const Title = styled.Text`
  color         : #616161;
  margin-bottom : ${hp(1)}px;
  font-size     : ${wp(4.5)}px;
  font-family   : 'Nunito-SemiBold';
`;

export const ButtonSelected = styled.TouchableOpacity`
  flex            : 1.2;
  height          : ${hp(5)}px;
  background-color: #26d0ce;
  border-radius   : ${wp(50)}px;
  justify-content : center;
  align-items     : center;
`;

export const ButtonSelectedText = styled.Text`
  font-size   : ${wp(3.7)}px;
  color       : #fff;
  font-family : 'Nunito-Regular';
`;

export const ButtonNotSelectedView = styled.TouchableOpacity`
  flex            : 1;
  height          : ${hp(5)}px;
  background-color: #fff;
  justify-content : center;
  align-items     : center;
`;

export const ButtonNotSelectedText = styled.Text`
  font-size   : ${wp(3.5)}px;
  color       : #818181;
  font-family : 'Nunito-Regular';
`;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666',
}))`
  width               : ${wp(90)}px;
  margin-top          : ${hp(2)}px;
  border-bottom-width : ${hp(0.1)}px;
  border-bottom-color : ${props => props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666'};
  font-size           : ${wp(3.8)}px;
  font-family         : 'Nunito-Regular';
`;

export const DescriptionInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666',
}))`
  height       : ${hp(30)}px;
  width        : ${wp(90)}px;
  margin-top   : ${hp(2)}px;
  border-width : ${hp(0.1)}px;
  border-color : ${props => props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666'};
  border-radius: ${wp(2.5)}px;
  font-size    : ${wp(3.8)}px;
  font-family  : 'Nunito-Regular';
`;

export const DetailsView = styled.View`
  flex-direction: row;
  margin-top    : ${hp(2)}px;
`;

export const DetailsText = styled.Text`
  color       : #000;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const TextInputDetails = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666',
}))`
  width               : ${wp(20)}px;
  border-bottom-width : ${hp(0.1)}px;
  border-bottom-color : ${props => props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666'};
  font-size           : ${wp(3.8)}px;
  font-family         : 'Nunito-Regular';
`;

export const HourView = styled.View`
  flex-direction  : row;
  align-items     : center;
  justify-content : center;
`;

export const HourText = styled.Text`
  color       : #000;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-Regular';
`;

export const HourInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666',
}))`
  width               : ${wp(20)}px;
  border-bottom-color : ${props => props.empty ? '#FF6767' : props.focus ? '#1C9E9C' : '#666'};
  border-bottom-width : ${hp(0.1)}px;
  align-self          : center;
  text-align          : center;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #26d0ce;
  height          : ${hp(7)}px;
  width           : ${wp(80)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(1)}px;
  margin-bottom   : ${hp(1)}px;
  border-radius   : ${wp(1.5)}px;
`;

export const TextButton = styled.Text`
  color       : #fff;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-SemiBold';
`;

export const ButtonCancelView = styled.TouchableOpacity`
  border-color    : #ff6767;
  border-width    : ${wp(0.3)}px;
  height          : ${hp(7)}px;
  width           : ${wp(80)}px;
  justify-content : center;
  align-items     : center;
  margin-top      : ${hp(2)}px;
  margin-bottom   : ${hp(1)}px;
  border-radius   : ${wp(1.5)}px;
`;

export const TextCancelButton = styled.Text`
  color       : #ff6767;
  font-size   : ${wp(4)}px;
  font-family : 'Nunito-SemiBold';
`;
