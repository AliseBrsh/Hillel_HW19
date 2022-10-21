import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MainPage.module.scss';
import CitiesList from '../../components/CitiesList';
import { cityNames } from '../../data/cities';
import Search from '../../components/Search';

export default function MainPage() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredCityNames, setFilteredCityNames] = useState(cityNames);

    useEffect(() => {
        const filteredNames = cityNames.filter(cityName => cityName.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredCityNames(filteredNames)
    }, [searchValue])


    const changeHandler = (value) => {
        setSearchValue(value)
    }
  return (
    <div className="container mt-3">
      <Search onChange={changeHandler} value={searchValue} />
      <CitiesList cities={filteredCityNames} />
    </div>
  );
}
