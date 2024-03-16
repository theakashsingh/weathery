const WeatherDetails = ({ precipitation, humidity, wind }) => {
  return (
    <div className="weather_details">
      <h2>Additional Info</h2>
      <div className="weather_detail">
        <div className="detail">
          <p>Precipitation</p> <span>{precipitation}%</span>
        </div>
        <div className="detail">
          <p>Humidity</p> <span>{humidity}%</span>
        </div>
        <div className="detail">
          <p>Wind</p> <span>{wind}km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
