import React from 'react';
import { Link } from 'react-router-dom';

const CitiesList = ({ cities }) => {
  return (
    <ul className="list-group">
      {cities.map((city, index) => (
        <li key={index} className="list-group-item">
          <Link to={`city/${city}`}>{city}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
