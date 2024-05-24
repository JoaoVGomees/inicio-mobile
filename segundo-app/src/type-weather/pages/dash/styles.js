import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 50px;
  background-color: #13131A;
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Card = styled.View`
  background-color: #16161F;
  margin: 8px 0;
  width: 95%;
  height: 600px;
  border-radius: 12px;
`;

export const Actions = styled.View`
  margin: 12px;
  width: 95%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  `

export const CardHome = styled.View`
  background-color: #1E1E29;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-sizing: border-box;
  `;

export const CardHomeImg = styled.Image`
  width: 36px;
  height: 24px;
  `;

export const CardInput = styled.TextInput`
  background-color: #1E1E29;
  font-size: 18px;
  width: 84.4%;
  height: 70px;
  padding: 20px;
  border-radius: 8px;
  `;

export const Today = styled.ImageBackground`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 12px;
  margin-top: 0;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const TodayInfo = styled.View`
  width: 100%;
  height: 50px;
  padding: 2px;
  display: flex;
  flex-direction: row;
`; 

export const TodayInfoLocation = styled.View`
  width: 50%;
`;

export const Location = styled.Text`
  color: #FAFAFA;
  font-size: 18px;
  font-weight: bold;
`
export const LocationDetails = styled.Text`
  color: #FAFAFA;
  font-size: 12px;
  font-weight: normal;
`
export const TodayInfoHour = styled.Text`
  width: 50%;
  color: #FAFAFA;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
`;

export const TodayWeather = styled.View`
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: row;
`;

export const TodayWeatherInfo = styled.View`
  width: 50%;
  padding: 8px;
  gap: 8px;
  justify-content: center;
`;

export const Weather = styled.Text`
  color: #FFF;
  font-weight: 900;
  font-size: 56px;
`;

export const WeatherMinMax = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const WeatherDesc = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: normal;
`;

export const TodayWeatherIconContainer = styled.View`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodayWeatherIcon = styled.Image`
  width: 200px;
  height: 200px;
`;