import React, { useState} from 'react';
import { ScrollView } from 'react-native';

import { 
  Container, FilterView, Title, PriceView, PriceInput, 
  ButtonContainer, ButtonView, ButtonText, ButtonSelected, ButtonSelectedText
 } from './styles';

const Filter = () => {
  const [to_sell, setTo_Sell] = useState(0);
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
          <ButtonSelected>
            <ButtonSelectedText>Ambos</ButtonSelectedText>
          </ButtonSelected>
          <ButtonView>
            <ButtonText>Venda</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>Aluguel</ButtonText>
          </ButtonView>
        </ButtonContainer>
      </FilterView>

      <FilterView>
        <Title>Preço: </Title>
        <PriceView>
          <PriceInput 
            placeholder='Mín.' 
            keyboardType='numeric' 
            onChange={(text) => setMinPrice(text)}
          />
          <PriceInput 
            placeholder='Máx.' 
            keyboardType='numeric' 
            onChange={(text) => setMaxPrince(text)}
          />
        </PriceView>
      </FilterView>

      <FilterView>
        <Title>Tipo</Title>
        
        <ButtonContainer>
          <ButtonView>
            <ButtonText>Qualquer</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>Casa</ButtonText>
          </ButtonView>  
        </ButtonContainer>

        <ButtonContainer>
          <ButtonView>
            <ButtonText>Apartamento</ButtonText>
          </ButtonView>
          <ButtonView>
            <ButtonText>Kitnet</ButtonText>
          </ButtonView>  
        </ButtonContainer>
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
