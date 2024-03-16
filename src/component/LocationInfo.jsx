import locationImage from "../assets/london.jpg";

const LocationInfo = ({
  location,
  date,
  currentSituation,
  locationSituationIcon,
}) => {
  return (
    <div className="location_info">
      <div className="location_data">
        <h1>
          <span>{location.name}</span>, <span>{location.country}</span>
        </h1>
        <p>{date}</p>
        <div className="current_situation">
          <img src={locationSituationIcon} alt="Location" />
          <p>{currentSituation}</p>
        </div>
      </div>
      <div className="location_img">
        <img src={locationImage} alt="" />
        <div className="location_live">Live</div>
      </div>
    </div>
  );
};

export default LocationInfo;
