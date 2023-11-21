import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center; 
  border-radius: 20px; 
  background: white; 
  padding: 20px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
  display: inline-block; 
  margin-top: 20px; 
  justify-content: center;
`;


const WeatherComponent = () => {
  const [cityName, setCityName] = useState(''); // 도시 이름 상태
  const [weather, setWeather] = useState(null); // 날씨 정보 상태

  const searchWeather = async () => {
    const apiKey = `23c0360c96978464e56dad7eb7737c3e`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data); // 날씨 정보를 상태에 저장
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null); // 오류 발생 시 날씨 정보 초기화
    }
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchWeather(); // 엔터 키를 누르면 searchWeather 함수 호출
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="도시를 입력하세요"
        style={{ borderRadius: "10px", height: "5vw" }}
        value={cityName}
        onChange={handleCityChange}
        onKeyPress={handleKeyPress}
      />
      {weather && (
        <div>
          <Container>
          <h1>{cityName}</h1>
          <p>{Math.round(((weather.main.temp - 273.15) * 10)) / 10}</p>
          <p>{weather.weather[0].description}</p>
          </Container>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
