import React from "react";
import { View, Text } from "react-native";

import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import {
  Container,
  LogoImage,
  ButtonTextWhite,
  ButtonTextBlack,
} from "./styles";

const Home = ({ navigation }) => {

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  function handleNavigatetoRegister(){
    navigation.navigate("SignUp");
  }
  return (
    <Container>
      <LogoImage source={logo} />
      <Button onPress={handleNavigateToLogin}>
        <ButtonTextWhite>Entrar</ButtonTextWhite>
      </Button>
      <Button style="outline" onPress={handleNavigatetoRegister}>
        <ButtonTextBlack>Cadastre-se</ButtonTextBlack>
      </Button>
    </Container>
  );
};

export default Home;
