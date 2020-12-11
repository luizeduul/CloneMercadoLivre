import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

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
      name: "Início",
      action: "Main",
      icon: <AntDesign name="home" size={24} />,
    },
    {
      id: 2,
      name: "Buscar",
      action: "List",
      icon: <AntDesign name="search1" size={24} />,
    },
    {
      id: 3,
      name: "Notificações",
      action: "",
      icon: <Feather name="bell" size={24} />,
    },
    {
      id: 4,
      name: "Minhas Compras",
      action: "",
      icon: <FontAwesome name="shopping-bag" size={24} />,
    },
    {
      id: 5,
      name: "Favoritos",
      action: "",
      icon: <AntDesign name="hearto" size={24} />,
    },
    {
      id: 6,
      name: "Minha Conta",
      action: "",
      icon: <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />,
    },
    {
      id: 7,
      name: "Vender",
      action: "",
      icon: <AntDesign name="tago" size={24} />,
    },
    {
      id: 8,
      name: "Histórico",
      action: "",
      icon: <Feather name="clock" size={24} />,
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
