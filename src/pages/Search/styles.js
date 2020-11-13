import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderView = styled.View`
  background-color: #26d0ce;
  height: ${hp(16)}px;
  padding-top: ${hp(4)}px;
  padding-left: ${wp(5)}px;
`;

export const SearchView = styled.View`
  width: ${wp(90)}px;
  background-color: #fff;
  height: ${hp(8)}px;
  /* margin-top: ${hp(2)}px; */
  border-radius: ${wp(2)}px;
  flex-direction: row;
  align-items: center;
  padding-left: ${wp(4)}px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  font-size: ${wp(5)}px;
  width: ${wp(58)}px;
  margin-right: ${wp(4)}px;
`;

export const OptionsView = styled.View`
  margin-left: ${wp(2)}px;
  border-left-width: ${wp(0.2)}px;
  height: 100%;
  justify-content: center;
  padding-left: ${wp(2)}px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  width: ${wp(100)}px;
  /* height: 100%; */
  background-color: #fff;
`;

export const CardView = styled.TouchableOpacity`
  margin-top: ${hp(3)}px;
  width: ${wp(95)}px;
  height: ${hp(30)}px;
  border-radius: ${wp(2)}px;
  border-width: ${wp(0.1)}px;
`;

export const CardPhotoView = styled.View`
  background-color: #333;
  height: ${hp(20)}px;
  border-top-left-radius: ${wp(2)}px;
  border-top-right-radius: ${wp(2)}px;
`;

export const PriceText = styled.Text`
  font-size: ${wp(4)}px;
  font-weight: bold;
`;

export const CardTextView = styled.View`
  padding-left: ${wp(2)}px;
`;

export const CardTextDescription = styled.Text`
  font-size: ${wp(3)}px;
`;
