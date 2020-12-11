import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { EvilIcons, Feather } from "@expo/vector-icons";

import Main from "../Main";
import List from "../List";
import SearchBarHeader from "../../../components/SearchBarHeader";

const { Navigator, Screen } = createStackNavigator();

const optionsHeader = ({ navigation }) => ({
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#ffe600",
  },
  headerTintColor: "#000",
  headerTitleContainerStyle: {
    flex: 1,
  },
  headerTitle: () => <SearchBarHeader />,
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      title="Info"
      onPress={() => navigation.toggleDrawer()}
    >
      <Feather name="menu" size={24} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity style={{ marginRight: 15 }} title="Info">
      <Feather name="shopping-cart" size={24} />
    </TouchableOpacity>
  ),
  
});

const Navigation = () => {
  return (
    <Navigator initialRouteName="Main">
      <Screen name="Main" component={Main} options={optionsHeader} />
      <Screen name="List" component={List} options={optionsHeader} />
    </Navigator>
  );
};

export default Navigation;
