import React from 'react';
import { EvilIcons } from "@expo/vector-icons";

import { ViewSearch, InputSearch } from './styles';

const SearchBarHeader = () => {
  return (
    <ViewSearch>
      <EvilIcons
        name="search"
        size={24}
        color="#c4c4c4"
        style={{ marginRight: 5 }}
      />
      <InputSearch placeholder="Buscar no Mercado Livre"/>
    </ViewSearch>
  );
};

export default SearchBarHeader;