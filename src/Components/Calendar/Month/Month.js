import React from "react";
import DayTile from "./DayTile/DayTile";
import "./Month.css"
const Month = ({ month, monthIndex, dayCount}) => {
    const days = () => {
        let res = [];
        if(month==="Aug")for(let i=1;i<=6;i++) res.push(<DayTile month={month} monthIndex={monthIndex} date={null}/>)
        for(let i=1;i<=dayCount;i++) res.push(<DayTile month={month} monthIndex={monthIndex} date={i}/>)
        return res;
    }
    return (
        <>
        {days()}
        </>
    )
}

export default Month;