import React from "react";

import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import {
  Container,
  LogoImage,
  InputEmail,
  ButtonTextWhite,
} from "./styles";

const ResetPassword = () => {
  return (
    <Container>
      <LogoImage source={logo} />
      <InputEmail
        name="user"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
      />
      <Button>
        <ButtonTextWhite>Recuperar senha</ButtonTextWhite>
      </Button>
    </Container>
  );
};

export default ResetPassword;
