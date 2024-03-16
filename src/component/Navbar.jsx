import { useState } from "react";
import locationImg from "../assets/london.jpg";

const Navbar = ({ onSearch , location}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationImageData, setIsLocationImageData] = useState(true);

  const toggleSearch = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchTerm);
      setSearchTerm("");
    }
  };

  const handleLocationImageData = () => {
    setIsLocationImageData(!isLocationImageData);
  };

  return (
    <nav className="navbar">
      <div className="menu">
        <span onClick={handleLocationImageData}>
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5H19"
              stroke="#003339"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8.5H14.1426"
              stroke="#003339"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <form className="search_bar_container">
        <div className={`search_bar ${isOpen ? "open" : ""}`}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="search_icon" onClick={toggleSearch}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.7271"
              cy="7.54545"
              r="6.54545"
              stroke="#003339"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9996 16.8181L12.3633 12.1818"
              stroke="#003339"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <div
        className={`location_data_and_image ${
          isLocationImageData ? "" : "close"
        }`}
      >
        <span onClick={handleLocationImageData}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.625 20.3741L20.375 1.62415"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.375 20.3741L1.625 1.62415"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
          <div className="nav_live">Live</div>
          <div className="nav_live_info">
            <div className="current_location"><svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.5 6.53801C0.504323 2.92896 3.42896 0.00432309 7.03801 0C10.6471 0.00432309 13.5717 2.92896 13.576 6.53801C13.576 10.6844 7.74804 16.5595 7.5009 16.8079C7.37824 16.9309 7.2117 17 7.03801 17C6.86433 17 6.69778 16.9309 6.57512 16.8079C6.32798 16.5595 0.5 10.6844 0.5 6.53801ZM7.03801 4.24971C5.77422 4.24971 4.74971 5.27422 4.74971 6.53801C4.75115 7.80121 5.77481 8.82487 7.03801 8.82632C8.30181 8.82632 9.32632 7.80181 9.32632 6.53801C9.32632 5.27422 8.30181 4.24971 7.03801 4.24971Z" fill="white"/>
</svg>
<div>CURRENT LOCATION</div>
</div>
            <div className="current_location_name">{location.name}, {location.country}</div>
          </div>
        <img src={locationImg} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
