import React from "react";
import {AntDesign, FontAwesome, Feather} from "@expo/vector-icons";
import { Container, ButtonCirleMenu } from "./styles";

const iconButton = [
  {
    id: 1,
    icon: <FontAwesome name="qrcode" size={25}/>,
  },
  {
    id: 2,
    icon: <AntDesign name="tago" size={25}/>,
  },
  {
    id: 3,
    icon: <Feather name="shopping-bag" size={25}/>,
  },
  {
    id: 4,
    icon: <AntDesign name="car" size={25}/>,
  },
  {
    id: 5,
    icon: <AntDesign name="plus" size={25}/>,
  },
];
const MenuOptions = () => {
  return (
    <Container>
      {iconButton.map((item) => (
        <ButtonCirleMenu key={item.id}>
          {item.icon}
        </ButtonCirleMenu>
      ))}
    </Container>
  );
};

export default MenuOptions;
