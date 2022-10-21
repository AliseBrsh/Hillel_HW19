import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = 'd18bc2b89acaa9a61078037d21bc66df';
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

export default function CityPage() {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState({});
  useEffect(() => {
    axios
      .get(
        `/forecast`, {
            params: {
                q: cityName,
                appid: API_KEY,
                units:'metric'
            }
        }
      )
      .then(({data}) => {
        setCityData(data);
      });
  }, []);
  return (
    <div className="container mt-3">
      <h2>Name: {cityData.city?.name}</h2>
      <h2 className="mb-5">Country: {cityData.city?.country}</h2>
      <ul className="list-group">
        {cityData.list?.map((item) => (
          <li key={item.dt} className="list-group-item">
            <p>Date: {item.dt_txt}</p>
            <p>Temp: {item.main.temp}&#8451;</p>
            <p>Davlenie: {item.main.pressure}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
