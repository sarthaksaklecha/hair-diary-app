import React from "react";
import './Header.css';
import { useSelector } from 'react-redux';


const Header = () => {
    const month = useSelector((state)=>state.month.month);
    return (
      <div className="root">
        <div className="upper-header">

          <div className="section1">
            <div className="back-arrow">
                <img src="https://img.icons8.com/material-outlined/96/000000/left.png" alt="back-icon"/>
            </div>
            <div className="logo">
                <h1><span className="my">my </span>hair diary</h1>
            </div>
          </div>

          <div className="section2">
            <div className="month-year"><strong>{month}</strong> 2020</div>
          </div>

        </div>
    
        <div className="lower-header">
        {["S","M","T","W","T","F","S"].map(day => {
            return <div className="day-tab">{day}</div>
        })}
        </div>
      </div>
    );
}

export default Header;