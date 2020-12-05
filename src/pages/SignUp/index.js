import React, { useState } from "react";
import { Alert } from "react-native";

import firebase from "../../services/firebase";

import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import {
  Container,
  LogoImage,
  InputEmail,
  InputPassword,
  ButtonTextWhite,
} from "./styles";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignUp() {
    if (email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          Alert.alert('Tudo certo');
        }).catch((error)=>{
          Alert.alert('Ocorreu um erro' + error);
        });
    }
  }

  return (
    <Container>
      <LogoImage source={logo} />
      <InputEmail
        name="user"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
        onChangeText={(text) => {setEmail(text)}}
      />
      <InputPassword
        name="password"
        autoCapitalize="none"
        secureTextEntry
        placeholder="Senha"
        onChangeText={(text) => {setPassword(text)}}
      />
      <Button onPress={handleSignUp}>
        <ButtonTextWhite>Cadastrar</ButtonTextWhite>
      </Button>
    </Container>
  );
};

export default SignUp;
