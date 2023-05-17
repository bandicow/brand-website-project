import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./main/MainPage";
import SaleShop from "./Store/SaleShop";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/saleshop/*" element={<SaleShop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
