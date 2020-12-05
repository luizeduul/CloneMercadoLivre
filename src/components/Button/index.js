import React from "react";
import { TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={
        (props.style === "outline"
          ? styles.button_outline_primary
          : styles.button_primary)
      }
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
