
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import Sign from './Sign';
import SignIn from './SignIn'
import Temperature from './Temperature'
import Humidity from './Humidity'
import Presence from './Presence'
import Reminder from './Reminder';
import Cards from './components/Cards';
import Notifications from './Notifications'
function App() {
  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/sign' exact element={<SignIn/>} />
          <Route path='/login' exact element={<Sign/>} />
          <Route path='/view' exact element={<Cards/>} />
          <Route path='/notifications' exact element={<Notifications/>} />
          <Route path='/temperature-reminders' exact element={<Temperature/>} />
          <Route path='/humidity-reminders' exact element={<Humidity/>} />
          <Route path='/presence-reminders' exact element={<Presence/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;