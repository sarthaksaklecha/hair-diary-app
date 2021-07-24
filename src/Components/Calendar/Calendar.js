import React from "react";
import { useDispatch } from "react-redux";
import './Calendar.css';
import { HandleScroll } from "./Calendar.utils";

import Month from "./Month/Month"

const Calendar = () => {
    const dispatch = useDispatch();
    HandleScroll(dispatch);
    return (
        <div className="calendar">
            {[["Aug",8,31],["Sep",9,30],["Oct",10,31],["Nov",11,30], ["Dec",12,31]].map((item)=><Month className="month-calendar" month={item[0]} monthIndex={item[1]} dayCount={item[2]}/>)}
        </div>
    );
}

export default Calendar;