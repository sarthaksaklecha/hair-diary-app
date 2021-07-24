import React, { useEffect } from "react";
import "./legendCodes.css";

const legendToCode = {
    "hair cut" : "Cu",
    "protein treatment" : "Pr",
    "hair color" : "HC",
    "deep conditioning" : "DC",
    "clarifying" : "C"
}

const codeToColor = {
    "Cu" : "rgb(244,223,235)",
    "Pr" : "rgb(221,235,241)",
    "HC" : "rgb(244,223,235)",
    "DC" : "rgb(221,237,234)",
    "C" :  "rgb(251,228,228)"
}


const LegendCode = ({size,uniqueId,code}) => {
    console.log(uniqueId);
    console.log(codeToColor[legendToCode[code]]);
    useEffect(()=>{
        document.getElementById(uniqueId).style.backgroundColor = codeToColor[legendToCode[code]];
        if(size==="large") {
            document.getElementById(uniqueId).style.width = "30px";
            document.getElementById(uniqueId).style.height = "30px";
            document.getElementById(uniqueId).style.fontSize = "20px"
            
        }
    },[uniqueId,code,size])
    return (
        <div id={uniqueId} className="legend-code">
            {legendToCode[code]}
        </div>
    )
}

export default LegendCode;