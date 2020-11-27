import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import api from '../../../../services/api';

import {
  Container,
  FilterView,
  ConfirmView,
  ConfirmButton,
  ConfirmText,
  Title,
  PriceView,
  PriceInput,
  ButtonContainer,
  ButtonView,
  ButtonText,
  ButtonSelected,
  ButtonSelectedText,
} from './styles';

const Filter = ({navigation}) => {
  const [toSellSelected, setToSellSelected] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrince, setMaxPrice] = useState('');
  const [bedroomsSelected, setBedroomsSelected] = useState(1);
  const [bahtroomsSelected, setBathroomsSelected] = useState(1);

  function applyFilters() {
    const filterData = {
      to: toSellSelected,
      min_price: minPrice > 0 ? parseInt(minPrice, 10) : 0,
      max_price: maxPrince > 0 ? parseInt(maxPrince, 10) : 0,
      bed: bedroomsSelected,
      bath: bahtroomsSelected,
    };

    navigation.navigate('FilterResult', {filterData});

    // api
    //   .put('houses', filterData)
    //   .then((e) => console.log(e.data))
    //   .catch((e) => console.log(e));
  }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <ConfirmView>
        <ConfirmButton
          onPress={() => {
            applyFilters();
          }}>
          <ConfirmText>Aplicar filtros</ConfirmText>
        </ConfirmButton>
      </ConfirmView>

      <FilterView>
        <Title>Para: </Title>

        <ButtonContainer>
          {toSellSelected ? (
            <>
              <ButtonSelected>
                <ButtonSelectedText>Venda</ButtonSelectedText>
              </ButtonSelected>
              <ButtonView
                onPress={() => {
                  setToSellSelected(false);
                }}>
                <ButtonText>Aluguel</ButtonText>
              </ButtonView>
            </>
          ) : (
            <>
              <ButtonView
                onPress={() => {
                  setToSellSelected(true);
                }}>
                <ButtonText>Venda</ButtonText>
              </ButtonView>
              <ButtonSelected>
                <ButtonSelectedText>Aluguel</ButtonSelectedText>
              </ButtonSelected>
            </>
          )}
        </ButtonContainer>
      </FilterView>

      <FilterView>
        <Title>Preço: </Title>
        <PriceView>
          <PriceInput
            placeholder="Mín."
            keyboardType="numeric"
            value={minPrice}
            maxLength={10}
            onChangeText={(text) => setMinPrice(text)}
          />
          <PriceInput
            placeholder="Máx."
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => setMaxPrice(text)}
            value={maxPrince}
          />
        </PriceView>
      </FilterView>

      <FilterView>
        <Title>Quartos</Title>

        <ButtonContainer>
          {bedroomsSelected === 1 ? (
            <ButtonSelected>
              <ButtonSelectedText>Qualquer</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBedroomsSelected(1);
              }}>
              <ButtonText>Qualquer</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>1</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBedroomsSelected(2);
              }}>
              <ButtonText>1</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>2</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBedroomsSelected(3);
              }}>
              <ButtonText>2</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 4 ? (
            <ButtonSelected>
              <ButtonSelectedText>3</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBedroomsSelected(4);
              }}>
              <ButtonText>3</ButtonText>
            </ButtonView>
          )}
        </ButtonContainer>
      </FilterView>

      <FilterView>
        <Title>Banheiros</Title>

        <ButtonContainer>
          {bahtroomsSelected === 1 ? (
            <ButtonSelected>
              <ButtonSelectedText>Qualquer</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBathroomsSelected(1);
              }}>
              <ButtonText>Qualquer</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>1</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBathroomsSelected(2);
              }}>
              <ButtonText>1</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>2</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBathroomsSelected(3);
              }}>
              <ButtonText>2</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 4 ? (
            <ButtonSelected>
              <ButtonSelectedText>3</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setBathroomsSelected(4);
              }}>
              <ButtonText>3</ButtonText>
            </ButtonView>
          )}
        </ButtonContainer>
      </FilterView>
    </ScrollView>
  );
};

export default Filter;
