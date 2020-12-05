import React from "react";
import { View } from "react-native";

import { Container, ImageProfile } from "./styles";

const Profile = () => {
  return (
    <Container>
      <ImageProfile
        source={{
          uri:
            "https://avatars3.githubusercontent.com/u/7030943?s=460&u=71fc0a7dfcf703144fd2436c3c231126581b40c1&v=4",
        }}
      />
    </Container>
  );
};

export default Profile;
