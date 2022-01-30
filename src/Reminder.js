import React from 'react';
import { Button } from './components/Button';
import './components/HeroSection.css';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Reminder() {
    const navigate = useNavigate();
  return(
      <div>
         <div className='hero-container'>
      
      <div className='hero-btns'>
        <button
        onClick={()=>navigate('/view')}
         
        >
          VIEW REMINDERS
        </button>
        <button
         onClick={()=>navigate('/notifications')}
        >
          VIEW NOTIFICATIONS
        </button>
      
      </div>
    </div>
      </div>
  );  
}
export default Reminder;