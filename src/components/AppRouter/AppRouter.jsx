import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CityPage from '../../pages/CityPage';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/city/:cityName" element={<CityPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
