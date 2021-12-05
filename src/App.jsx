import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThemeContext, ThemeProvider} from 'styled-components';
import './App.css'
import { Suspense } from "react";
import { useState} from 'react'
import {DarkTheme, LightTheme} from './styled';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import HotelList from "./pages/HotelList/HotelList";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import HotelPayment from "./pages/HotelPayment/HotelPayment";
import Congratulations from "./pages/HotelCongratulations/Congratulations";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer/Footer";
import Flight from './pages/Flight';
import Car from './pages/Car';
import 'swiper/swiper-bundle.css';

// ************************************************************
const App = () => {
  const [theme, toggleTheme] = useState('light');

  return (
    <div className="App">
     <Suspense fallback=" loading">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme ={theme === 'light' ? LightTheme : DarkTheme}>
          <BrowserRouter>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/hotellist" element={<HotelList />} />
                <Route path="/details" element={<HotelDetails />} />
                <Route path="/payment" element={<HotelPayment />} />
                <Route path="/congratulation" element={<Congratulations />} />
                <Route path="/profile" element={<MyProfile />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/car" element={<Car/>} />
                <Route  path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
      </Suspense>
    </div>
  );
};

export default App;
