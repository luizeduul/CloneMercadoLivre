import React from "react";

import {
  Container,
  ViewTitle,
  Title,
  ViewProduct,
  ImageProduct,
  TextDescription,
  TextDiscount,
  PriceView,
  TextPrice,
  TextShippingValue,
  SubdivisionView,
  TextSubdivision,
} from "./styles";

const OfferDay = () => {
  return (
    <Container>
      <ViewTitle>
        <Title>Oferta do Dia</Title>
      </ViewTitle>
      <ViewProduct>
        <ImageProduct
          source={{
            uri:
              "https://images-americanas.b2w.io/produtos/01/00/img/1201746/3/1201746335_1GG.jpg",
          }}
        />
        <TextDescription>Smartphone Zenfone 6 256Gb</TextDescription>
        <PriceView>
          <TextPrice>R$ 3900,00</TextPrice>
          <TextDiscount>5% OFF</TextDiscount>
        </PriceView>

        <TextSubdivision>10 x R$ 390,00 sem juros</TextSubdivision>

        <TextShippingValue>Frete grátis</TextShippingValue>
      </ViewProduct>
    </Container>
  );
};

export default OfferDay;
