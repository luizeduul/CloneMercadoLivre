import React from "react";
import { View, Text, FlatList } from "react-native";

import {
  Button,
  Container,
  Picture,
  InfoProductView,
  TextTotalProducts,
  TextProductTitle,
  TextProductPrice,
  TextProductSubdivision,
  TextProductDetatch,
  TextProductCondition
} from "./styles";

const listProduct = [
  {
    id: "2",
    name: "TV",
    price: 1250.27,
    condition: "Novo",
    subdivision: 8,
    picture:
      "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
  },
  {
    id: "1",
    name: "TV2",
    price: 1250.27,
    condition: "Novo",
    subdivision: 6,
    picture:
      "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
  },
  {
    id: "3",
    name: "TV 2",
    price: 1250.27,
    condition: "Novo",
    subdivision: 10,
    picture:
      "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
  },
  {
    id: "4",
    name: "TV 2",
    price: 1250.27,
    condition: "Novo",
    subdivision: 12,
    picture:
      "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg",
  },
];

const Item = ({ item }) => {
  return (
    <Button>
      <Picture source={{ uri: item.picture }} />
      <InfoProductView>
        <TextProductTitle>{item.name}</TextProductTitle>
        <TextProductPrice>R$ {item.price}</TextProductPrice>
        <TextProductSubdivision>
          Parcelado em {item.subdivision} x de{" "}
          <TextProductDetatch>
            R$ {(item.price / item.subdivision).toFixed(2)}
          </TextProductDetatch>
        </TextProductSubdivision>
        <TextProductCondition>{item.condition}</TextProductCondition>
      </InfoProductView>
    </Button>
  );
};

const List = () => {
  return (
    <>
      <TextTotalProducts>
        Produtos Encontrados: {listProduct.length}
      </TextTotalProducts>
      <Container>
        <FlatList
          data={listProduct}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </>
  );
};

export default List;
