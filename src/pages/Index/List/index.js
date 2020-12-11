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
    id: "1",
    name: "Smart TV SAMSUNG 50' 4K",
    price: 2250.30,
    condition: "Novo",
    subdivision: 10,
    picture:
      "https://a-static.mlcdn.com.br/618x463/smart-tv-crystal-uhd-4k-led-50-samsung-50tu8000-wi-fi-bluetooth-hdr-3-hdmi-2-usb/magazineluiza/225605700/42cdf08f2cf47621e3c745ce17e3e69b.jpg",
  },
  {
    id: "2",
    name: "Smart TV LG 43' Full HD",
    price: 1750.99,
    condition: "Novo",
    subdivision: 8,
    picture:
      "https://a-static.mlcdn.com.br/618x463/smart-tv-led-43-lg-43lm6300psb-full-hd-wi-fi-inteligencia-artificial-3-hdmi-2-usb/magazineluiza/193428600/fe7e77b8a185e55d1fff375f5759fdee.jpg",
  },
  {
    id: "3",
    name: "Smart TV Samsung 32' LED",
    price: 1250,
    condition: "Novo",
    subdivision: 10,
    picture:
      "https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/52ea19a005ac7ef47c2f53bbb5b6be9a.jpg",
  },
  {
    id: "4",
    name: "Smart TV LG 60' 4K' ",
    price: 3250,
    condition: "Novo",
    subdivision: 12,
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img/1729956/6/1729956621_1SZ.jpg",
  },
  {
    id: "5",
    name: "Smart TV Semp 50' 4K ",
    price: 2650,
    condition: "Novo",
    subdivision: 12,
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img/2563909/5/2563909576_1SZ.jpg",
  },
  {
    id: "6",
    name: "Smart TV Philips 50' 4K ",
    price: 3250,
    condition: "Novo",
    subdivision: 12,
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/1862309/2/1862309221SZ.jpg",
  },
  {
    id: "7",
    name: "Smart TV LG 50' 4K",
    price: 2230.99,
    condition: "Novo",
    subdivision: 10,
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img/495162/7/495162730_1SZ.jpg",
  },
 
  {
    id: "8",
    name: "Smart TV Philco 50' 4K' ",
    price: 3250,
    condition: "Novo",
    subdivision: 12,
    picture:
      "https://images-submarino.b2w.io/produtos/01/00/img/2609778/2/2609778226_1SZ.jpg",
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
