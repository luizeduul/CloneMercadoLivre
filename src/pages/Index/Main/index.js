import React from "react";
import { Text, View } from "react-native";
import MenuOptions from "../../../components/MenuOptions";
import OfferDay from "../../../components/OfferDay";
import Offers from "../../../components/Offers";

import { Container, Scroll } from "./styles";

const Main = () => {
  return (
    <Scroll>
      <Container>
        <MenuOptions />
        <OfferDay />
        <Offers />
      </Container>
    </Scroll>
  );
};

export default Main;
