import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./component/Navbar";
import LocationInfo from "./component/LocationInfo";
import HourlyForecast from "./component/HourlyForecast";
import WeatherDetails from "./component/WeatherDetails";
import LoadingCard from "./component/LoadingCard";
import TemperatureChart from "./component/TemperatureChart";

const API_KEY = "2d4db92b8e46458d929102910241403";

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
  const [dailyWeatherData, setDailyWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocationData({ latitude, longitude });
          },
          error => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
      setHourlyWeatherData(response.data.forecast.forecastday[0].hour);
      setDailyWeatherData(response.data.forecast.forecastday);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(`Error fetching weather data:${error}`);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (locationData) {
      const { latitude, longitude } = locationData;
      fetchWeatherData(latitude, longitude);
    }
  }, [locationData]);

  const handleSearch = async searchTerm => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchTerm}&days=7&aqi=no&alerts=no`
      );
      setLocationData({
        latitude: response.data.location.lat,
        longitude: response.data.location.lon,
      });
    } catch (error) {
      setLoading(false);
      alert(
        `Error fetching weather data for the searched location:${searchTerm}`
      );
      console.error(
        "Error fetching weather data for the searched location:",
        error
      );
    }
  };

  console.log({ weatherData, hourlyWeatherData, dailyWeatherData });
  return (
    <div className="app">
      {loading && <LoadingCard />}
      {weatherData && (
        <Navbar onSearch={handleSearch} location={weatherData.location} />
      )}
      {weatherData && (
        <>
          <LocationInfo
            location={weatherData.location}
            date={weatherData.forecast.forecastday[0].date}
            currentSituation={weatherData.current.condition.text}
            locationSituationIcon={weatherData.current.condition.icon}
          />
          <HourlyForecast hourlyData={hourlyWeatherData} />
          <hr />
          <WeatherDetails
            precipitation={weatherData.current.humidity}
            humidity={weatherData.current.humidity}
            wind={weatherData.current.wind_kph}
          />
          <TemperatureChart temperatureData={dailyWeatherData} />
        </>
      )}
    </div>
  );
};

export default App;
