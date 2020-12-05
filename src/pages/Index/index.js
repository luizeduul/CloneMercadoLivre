import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";


import Navigation from "./Navigation";
import DrawerContent from "../../components/DrawerContentMenu";


//import { Container } from './styles';
const { Navigator, Screen } = createDrawerNavigator();

const Index = () => {
  return (
    <Navigator 
      drawerContent={DrawerContent}
    >
      <Screen name="Navigation" component={Navigation} />
    </Navigator>
  );
};

export default Index;
