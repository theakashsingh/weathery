const HourlyForecast = ({ hourlyData }) => {
  console.log({ hourlyData });
  return (
   
      <div className="hourly_forecast">
        <div className="hourly_forecast_cards">
        {hourlyData?.map(hour => (
          <div key={hour.time} className="hourly_forecast_card">
            <span>{hour.time.split(" ")[1]}</span>
            <img src={hour.condition.icon} alt="Weather Icon" />
            <span>{hour.temp_c}</span>
          </div>
        ))}
        </div>
        
      </div>
  );
};

export default HourlyForecast;
