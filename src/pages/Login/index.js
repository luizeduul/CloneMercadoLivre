import React from "react";
import { View, Text } from "react-native";

import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import {
  Container,
  LogoImage,
  InputEmail,
  InputPassword,
  ButtonTextWhite,
  ButtonForgot,
  TextButtonForgot,
} from "./styles";

const Login = ({navigation}) => {
  function handleNavigateToResetPassword() {
    navigation.navigate("ResetPassword");
  }

  function handleLogin(){
    navigation.navigate("Index")
  }
  return (
    <Container>
      <LogoImage source={logo} />
      <InputEmail
        name="user"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
      />
      <InputPassword
        name="user"
        autoCapitalize="none"
        secureTextEntry
        placeholder="Senha"
      />
      <ButtonForgot onPress={handleNavigateToResetPassword}>
        <TextButtonForgot>Esqueceu sua senha?</TextButtonForgot>
      </ButtonForgot>
      <Button onPress={handleLogin}>
        <ButtonTextWhite>Entrar</ButtonTextWhite>
      </Button>
    </Container>
  );
};

export default Login;
