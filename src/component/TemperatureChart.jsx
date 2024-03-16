import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

import "./TemperatureChart.css";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const TemperatureChart = ({ temperatureData }) => {
  console.log({ temperatureData });

  const [data, setData] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const data = temperatureData.map(currData => {
      const date = currData.date;
      const hour = currData.hour;
      return {
        date,
        hour,
      };
    });

    setData(data);
  }, [temperatureData]);

  // Filter data based on selected date
  // const filteredData = data?.filter(entry => entry.date === selectedDate);

  // Create chart data
  const chartData = {
    labels: data[0]?.hour?.map(entry => entry.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data[0]?.hour.map(entry => entry.temp_c),
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        // pointBorderWidth: 4,
        borderColor: "#FF8900",
        backgroundColor: "#FF8900",
        fill: true,
        tension: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 2,
          display: false,
        },
        // min:2,
        // max:10
      },
    },
  };

  console.log({ data });

  return (
    <div className="temperature_data">
      <div className="temperature_header">
        <h2>Temperature</h2>{" "}
        <div className="change_month">
          {" "}
          <span>Last month</span>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.999986L5.46667 5.46624C5.52521 5.52486 5.60465 5.5578 5.6875 5.5578C5.77035 5.5578 5.84979 5.52486 5.90833 5.46624L10.375 0.999986"
              stroke="#003339"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>{" "}
      </div>
      <div className="temperature_chart">
        {/* Example: <DatePicker onChange={date => setSelectedDate(date)} /> */}

        {/* Render the temperature chart */}
        {data && <Line data={chartData} options={options} />}
      </div>
    </div>
  );
};

export default TemperatureChart;
