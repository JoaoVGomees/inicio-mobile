import React from "react";
import { Container, HeaderContainer, TitleText, HeaderImg, TitleContainer, TitleColored, Subtitle, Input } from "./styles";

import Background from "../../assets/images/Background.png";
import Cloud from "../../assets/images/cloud-icon.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud} />
        <TitleText>TypeWeather</TitleText>
      </HeaderContainer>

      <TitleContainer>
        <TitleText>
          Boas vindas ao <TitleColored>TypeWeather</TitleColored>
        </TitleText>
        <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
      </TitleContainer>
      <Input placeholder="Buscar local" placeholderTextColor="#7F7F98"></Input>
    </Container>
  );
}
