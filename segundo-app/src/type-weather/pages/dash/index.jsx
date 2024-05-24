import * as S from "./styles";
import Cloud from '../../assets/images/cloud-icon.png';
import TodayImage from '../../assets/images/image.png';
import TodayIcon from '../../assets/images/Icons.png'

export default function Dash() {
  return (
    <S.Container>
      <S.Card>
        <S.Actions>
          <S.CardHome>
            <S.CardHomeImg source={ Cloud }/>
          </S.CardHome>
          <S.CardInput placeholder="Buscar local" placeholderTextColor="#7F7F98"/>
        </S.Actions>

        <S.Today source={ TodayImage }>
          <S.TodayInfo>
            <S.TodayInfoLocation>
              <S.Location>Porto Alegre, RS</S.Location>
              <S.LocationDetails>Segunda Feira, 15 de Maio de 2023</S.LocationDetails>
            </S.TodayInfoLocation>

            <S.TodayInfoHour>21:39</S.TodayInfoHour>
          </S.TodayInfo>


          <S.TodayWeather>
            <S.TodayWeatherInfo>
              <S.Weather>28ºc</S.Weather>
              <S.WeatherMinMax>26ºc / 32ºc</S.WeatherMinMax>
              <S.WeatherDesc>Poucas nuvens</S.WeatherDesc>
            </S.TodayWeatherInfo>

            <S.TodayWeatherIconContainer>
              <S.TodayWeatherIcon source={ TodayIcon }/>
            </S.TodayWeatherIconContainer>

          </S.TodayWeather>
        </S.Today>
      </S.Card>
    </S.Container>
  );
}