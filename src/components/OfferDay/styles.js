import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  padding: 15px 0;
  margin-top: 20px;
  background-color: #fff;
`;

export const ViewTitle = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #c1c1c1;
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ViewProduct = styled.View`
  padding: 20px;
`;

export const ImageProduct = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
  margin-bottom: 40px;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
`;

export const PriceView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
`;

export const TextDiscount = styled.Text`
  font-size: 16px;
  line-height: 26px;
  color: #51866c;
  font-weight: bold;
`;

export const TextSubdivision = styled.Text`
  font-size: 16px;
  line-height: 26px;
  color: #51866c;
  font-weight: bold;
`;

export const TextShippingValue = styled.Text`
  font-size: 16px;
  line-height: 26px;
  color: #51866c;
`;
