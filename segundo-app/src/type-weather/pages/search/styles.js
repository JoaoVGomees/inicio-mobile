import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 10px;
  margin-top: 68px;
`;

export const HeaderImg = styled.Image`
  width: 36px;
  height: 24px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: #FAFAFA;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 350px;
  gap: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #BFBFD4;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #8FB2F5;
`;

export const Input = styled.TextInput`
  background-color: #1E1E29;
  width: 311px;
  height: 56px;
  padding: 20px;
  margin-top: 32px;
  border-radius: 8px;
`;