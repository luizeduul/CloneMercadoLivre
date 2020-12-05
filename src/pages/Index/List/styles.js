import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TextTotalProducts = styled.Text`
  margin: 20px 10px 0 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  margin: 0px 8px;
  border-bottom-width: 1px;
  border-bottom-color: #cdcdcd;
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 30px;
`;

export const InfoProductView = styled.View``;

export const TextProductTitle = styled.Text`
  font-size: 16px;
`;

export const TextProductPrice = styled.Text`
  font-size: 16px;
`;

export const TextProductSubdivision = styled.Text`
  font-size: 10px;
`;

export const TextProductDetatch = styled.Text`
  font-size: 12px;
  color: #00a650;
`;

export const TextProductCondition = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;