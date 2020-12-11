import React from "react";

import {Ionicons} from '@expo/vector-icons';

import {
  Container,
  Title,
  ViewTitle,
  ViewItem,
  ImageProduct,
  DetailsView,
  TextDescription,
  ViewPrice,
  TextDiscount,
  TextPrice,
  TextShipping,
  TextSubdivision,
  ShowAllView,
  ButtonShowAll,
  TextButton,
} from "./styles";

const listOffers = [
  {
    id: 1,
    description: "Smart Tv LG 60' 4K ",
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img/1729956/6/1729956621_1SZ.jpg",
    price: 3250,
    discount: 10,
    subdivision: 10,
    shipping: 0,
  },
  {
    id: 2,
    description: "Smartphone Samsung Galaxy S20+",
    picture:
      "https://images-americanas.b2w.io/produtos/01/00/img/1524160/0/1524160021_1GG.jpg",
    price: 3650,
    discount: 2,
    subdivision: 12,
    shipping: 10,
  },
  {
    id: 3,
    description: "Furadeira e Parafusadeira à Bateria 12V Impacto",
    picture:
      "https://images-americanas.b2w.io/produtos/01/00/img/41243/8/41243872_1GG.jpg",
    price: 430,
    discount: 4,
    subdivision: 8,
    shipping: 0,
  },
  {
    id: 4,
    description: "Lavadora de Roupas Brastemp 9kg",
    picture:
      "https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/132733/9/132733927_1GG.png",
    price: 1200,
    discount: 8,
    subdivision: 5,
    shipping: 50,
  },
  {
    id: 5,
    description: "Geladeira/Refrigerador Brastemp Frost",
    picture:
      "https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/133567/7/133567705_1GG.jpg",
    price: 2450,
    discount: 10,
    subdivision: 12,
    shipping: 0,
  },
];
const Offers = () => {
  return (
    <Container>
      <ViewTitle>
        <Title>Ofertas do dia</Title>
      </ViewTitle>
      {listOffers.map((item) => (
        <ViewItem key={item.id}>
          <ImageProduct
            source={{
              uri: item.picture,
            }}
          />
          <DetailsView>
            <TextDescription>{item.description}</TextDescription>
            <ViewPrice>
              <TextPrice>R$ {item.price}</TextPrice>
              <TextDiscount>
                {item.discount ? item.discount + "% OFF" : null}
              </TextDiscount>
            </ViewPrice>
            <TextSubdivision>{item.subdivision} x {(item.price/item.subdivision).toFixed(2)} sem juros</TextSubdivision>
            <TextShipping>
              {item.shipping ? "R$ " + item.shipping : "Frete Grátis"}
            </TextShipping>
          </DetailsView>
        </ViewItem>
      ))}
      <ShowAllView>
        <ButtonShowAll>
          <TextButton>Ver todas</TextButton>
          <Ionicons name="ios-arrow-forward" size={25} color="#3483fa"/>
        </ButtonShowAll>
      </ShowAllView>
    </Container>
  );
};

export default Offers;
