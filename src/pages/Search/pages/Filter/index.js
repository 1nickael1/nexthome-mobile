import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  FilterView,
  Title,
  PriceView,
  PriceInput,
  ButtonContainer,
  ButtonView,
  ButtonText,
  ButtonSelected,
  ButtonSelectedText,
} from './styles';

const Filter = () => {
  const [to_sell, setTo_Sell] = useState(null);
  const [toSellSelected, setToSellSelected] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrince, setMaxPrice] = useState(0);
  const [type, setType] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <FilterView>
        <Title>Para: </Title>

        <ButtonContainer>
          {toSellSelected === 1 ? (
            <ButtonSelected>
              <ButtonSelectedText>Ambos</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setToSellSelected(1);
              }}>
              <ButtonText>Ambos</ButtonText>
            </ButtonView>
          )}

          {toSellSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>Venda</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setToSellSelected(2);
              }}>
              <ButtonText>Venda</ButtonText>
            </ButtonView>
          )}
          {toSellSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>Aluguel</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView
              onPress={() => {
                setToSellSelected(3);
              }}>
              <ButtonText>Aluguel</ButtonText>
            </ButtonView>
          )}
        </ButtonContainer>
      </FilterView>

      <FilterView>
        <Title>Preço: </Title>
        <PriceView>
          <PriceInput
            placeholder="Mín."
            keyboardType="numeric"
            onChange={(text) => setMinPrice(text)}
          />
          <PriceInput
            placeholder="Máx."
            keyboardType="numeric"
            onChange={(text) => setMaxPrice(text)}
          />
        </PriceView>
      </FilterView>

      <FilterView>
        <Title>Quartos</Title>

        <ButtonContainer>
          <ButtonView>
            <ButtonText>Qualquer</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>1</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>2</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>3</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>4</ButtonText>
          </ButtonView>
        </ButtonContainer>
      </FilterView>

      <FilterView>
        <Title>Banheiros</Title>

        <ButtonContainer>
          <ButtonView>
            <ButtonText>Qualquer</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>1</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>2</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>3</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>4</ButtonText>
          </ButtonView>
        </ButtonContainer>
      </FilterView>
    </ScrollView>
  );
};

export default Filter;
