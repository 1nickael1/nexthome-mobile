import React, {useState} from 'react';
import {ScrollView} from 'react-native';

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
  const [to_sell          , setTo_Sell]           = useState(null);
  const [toSellSelected   , setToSellSelected]    = useState(1);
  const [minPrice         , setMinPrice]          = useState(0);
  const [maxPrince        , setMaxPrice]          = useState(0);
  const [type             , setType]              = useState(0);
  const [bedrooms         , setBedrooms]          = useState(0);
  const [bedroomsSelected , setBedroomsSelected]  = useState(1);
  const [bathrooms        , setBathrooms]         = useState(0);
  const [bahtroomsSelected, setBathroomsSelected] = useState(1);

  function applyFilters() {
    navigation.goBack();
  }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      
      <ConfirmView>
        <ConfirmButton onPress={() => {applyFilters();}}>
          <ConfirmText>Aplicar filtros</ConfirmText>
        </ConfirmButton>
      </ConfirmView>
      
      <FilterView>
        <Title>Para: </Title>

        <ButtonContainer>
          {toSellSelected === 1 ? (
            <ButtonSelected>
              <ButtonSelectedText>Ambos</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setToSellSelected(1);}}>
              <ButtonText>Ambos</ButtonText>
            </ButtonView>
          )}

          {toSellSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>Venda</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setToSellSelected(2);}}>
              <ButtonText>Venda</ButtonText>
            </ButtonView>
          )}

          {toSellSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>Aluguel</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setToSellSelected(3);}}>
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

          {bedroomsSelected === 1 ? (
            <ButtonSelected>
              <ButtonSelectedText>Qualquer</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBedroomsSelected(1);}}>
              <ButtonText>Qualquer</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>1</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBedroomsSelected(2);}}>
              <ButtonText>1</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>2</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBedroomsSelected(3);}}>
              <ButtonText>2</ButtonText>
            </ButtonView>
          )}

          {bedroomsSelected === 4 ? (
            <ButtonSelected>
              <ButtonSelectedText>3</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBedroomsSelected(4);}}>
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
            <ButtonView onPress={() => {setBathroomsSelected(1);}}>
              <ButtonText>Qualquer</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 2 ? (
            <ButtonSelected>
              <ButtonSelectedText>1</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBathroomsSelected(2);}}>
              <ButtonText>1</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 3 ? (
            <ButtonSelected>
              <ButtonSelectedText>2</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBathroomsSelected(3);}}>
              <ButtonText>2</ButtonText>
            </ButtonView>
          )}

          {bahtroomsSelected === 4 ? (
            <ButtonSelected>
              <ButtonSelectedText>3</ButtonSelectedText>
            </ButtonSelected>
          ) : (
            <ButtonView onPress={() => {setBathroomsSelected(4);}}>
              <ButtonText>3</ButtonText>
            </ButtonView>
          )}
          
        </ButtonContainer>
      </FilterView>
    </ScrollView>
  );
};

export default Filter;
