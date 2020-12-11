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
  padding: 10px 20px;
`;

export const ViewItem = styled.View`
  padding: 0 20px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #c1c1c1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ImageProduct = styled.Image`
  margin-top: 10px;
  width: 100px;
  height: 100px;
`;

export const DetailsView = styled.View`
  padding: 10px 26px 5px 10px;
  max-width: 82%;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const ViewPrice = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 4px;
  line-height: 20px;
`;

export const TextDiscount = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #51866c;
  font-weight: bold;
`;

export const TextSubdivision = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #51866c;
  font-weight: bold;
`;

export const TextShipping = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #51866c;
`;

export const ShowAllView = styled.View`
  padding: 20px 20px 0 20px;
`;

export const ButtonShowAll = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #3483fa;
  margin-right: 188px;
`;
