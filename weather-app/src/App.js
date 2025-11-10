import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const key = "bd5e378503939ddaee76f12ad7a97608"; // 🔑 from openweathermap.org
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`);
    const json = await res.json();
    setData(json.list ? json : null);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h2>🌤️ Simple Weather</h2>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
      <button onClick={getWeather}>Get</button>

      {data && (
        <>
          <h3>{data.city.name}</h3>
          <p>{data.list[0].main.temp}°C | {data.list[0].weather[0].main}</p>
          <Line
            data={{
              labels: data.list.slice(0, 7).map((_, i) => `Day ${i + 1}`),
              datasets: [{ label: "Temp °C", data: data.list.slice(0, 7).map(d => d.main.temp), borderColor: "blue" }]
            }}
          />
        </>
      )}
    </div>
  );
}