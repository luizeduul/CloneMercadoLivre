import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ResetPassword from "../pages/ResetPassword";
import Index from "../pages/Index";

const { Navigator, Screen } = createStackNavigator();

const optionsHeader = () => ({
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "#ffe600",
  },
});

const Routes = () => {
  return (
    <Navigator screenOptions={optionsHeader}>
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
      <Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <Screen name="Index" component={Index} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default Routes;
