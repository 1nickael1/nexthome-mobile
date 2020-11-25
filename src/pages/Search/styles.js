import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex            : 1;
  background-color: #fff;
`;

export const HeaderView = styled.View`
  border-color    : #ddd;
  border-width    : ${wp(0.3)}px;
  height          : ${hp(13)}px;
  padding-top     : ${hp(3)}px;
  padding-left    : ${wp(5)}px;
  flex-direction  : row;
`;

export const SearchView = styled.View`
  background-color: #fff;
  width           : ${wp(75)}px;
  height          : ${hp(7)}px;
  border-color    : #818181;
  border-width    : ${wp(0.3)}px;
  border-radius   : ${wp(50)}px;
  align-items     : center;
  flex-direction  : row;
  padding-left    : ${wp(4)}px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#818181',
})`
  width       : 84%;
  font-size   : ${wp(4)}px;
  font-family: 'Nunito-Regular';
`;

export const OptionsView = styled.View`
  margin-left       : ${wp(2)}px;
  height            : 70%;
  justify-content   : center;
  padding-left      : ${wp(2)}px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const Content = styled.View`
  flex            : 1;
  align-items     : center;
  width           : ${wp(100)}px;
  /* height       : 100%; */
  background-color: #fff;
`;

export const CardView = styled.TouchableOpacity`
  margin-top    : ${hp(3)}px;
  width         : ${wp(95)}px;
  height        : ${hp(33)}px;
  border-radius : ${wp(2)}px;
  border-width  : ${wp(0.1)}px;
  border-color  : #ccc;
`;

export const CardImageView = styled.Image`
  height                  : ${hp(20)}px;
  border-top-left-radius  : ${wp(2)}px;
  border-top-right-radius : ${wp(2)}px;
`;

export const CardPhotoView = styled.View`
  height                  : ${hp(20)}px;
  background-color        : #000;
  border-top-left-radius  : ${wp(2)}px;
  border-top-right-radius : ${wp(2)}px;
`;

export const PriceText = styled.Text`
  font-size     : ${wp(4)}px;
  padding-bottom: ${hp(.5)}px;
  font-family   : 'Nunito-Bold';
`;

export const CardTextView = styled.View`
  padding-top : ${hp(1)}px;
  padding-left: ${wp(2)}px;
`;

export const CardTextDescription = styled.Text`
  font-size     : ${wp(3)}px;
  padding-bottom: ${hp(.5)}px;
  font-family   : 'Nunito-Regular';
`;
