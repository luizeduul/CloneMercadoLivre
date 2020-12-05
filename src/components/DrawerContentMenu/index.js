import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

import logoMP from "../../assets/mercado_pago.png";
import Profile from "../Profile";
import {
  DrawerView,
  HeaderDrawerContainer,
  UserViewHeader,
  UserInfoView,
  MercadoPagoViewHeader,
  Label,
  DrawerBodyView,
  ImageLogo,
} from "./styles";


const HeaderDrawer = () => {
  return (
    <HeaderDrawerContainer>
      <UserViewHeader>
      <Profile />
        <UserInfoView>
          <Label>Olá, Luiz Edu </Label>
          <Label>Nível 4 - Mercado Pontos</Label>
        </UserInfoView>
      </UserViewHeader>
      <MercadoPagoViewHeader>
        <ImageLogo source={logoMP} />
        <Label style={{ marginLeft: 20 }}>Mercado Pago</Label>
      </MercadoPagoViewHeader>
    </HeaderDrawerContainer>
  );
};

const DrawerContent = ({ navigation }) => {
  const listMenuDrawer = [
    {
      id: 1,
      name: "Home",
      action: "Main",
      icon: <AntDesign name="home" size={24} />,
    },
    {
      id: 2,
      name: "Procurar",
      action: "List",
      icon: <AntDesign name="search1" size={24} />,
    },
  ];
  return (
    <DrawerView>
      <HeaderDrawer />
      <DrawerBodyView>
        <DrawerContentScrollView>
          {listMenuDrawer.map((menu) => (
            <DrawerItem
              key={menu.id}
              label={menu.name}
              icon={() => menu.icon}
              onPress={() => navigation.navigate(menu.action)}
            />
          ))}
        </DrawerContentScrollView>
      </DrawerBodyView>
    </DrawerView>
  );
};

export default DrawerContent;
