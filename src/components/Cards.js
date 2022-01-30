import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Temimage from './temperature.png'
import humimage from './humidity.jpg'
import presimage from './presence.png'
import { Link } from 'react-router-dom';


function Cards() {
 

  return (

    <div className="elements">
          <div className='elm temperatureRem'>
              <img src={Temimage} alt='teperature' className='img'/>
              <Link to="/temperature-reminders" className="btn ">Temperature reminders</Link>
          </div>
          <div className='elm humiditeRem'>
              <img src={humimage} alt="humidite" />
              <Link to="/humidity-reminders" className="btn ">humidity reminders</Link>
          </div>
          <div className='elm presenceRem'>
              <img src={presimage} alt="presence"  />
              <Link to="/presence-reminders" className="btn ">presence reminders</Link>
          </div>
        </div>
  );
}

export default Cards;