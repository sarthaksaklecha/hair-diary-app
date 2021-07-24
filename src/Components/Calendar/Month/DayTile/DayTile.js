import React, { useState } from "react";
import "./DayTile.css";
import StarRatings from 'react-star-ratings';
import { useSelector } from 'react-redux'
import { getPosts } from "../../../../API/utils";
import LegendCode from "../../../Posts/LegendCodes/legendCodes";
import Posts from "../../../Posts/Posts.js";

const DayTile = ({month, monthIndex, date}) => {
    if(Math.floor(date/(10)) === 0) date = "0" + date;
    if(Math.floor(monthIndex/(10)) === 0) monthIndex = "0" + monthIndex;
    let constructDate = "2020-"+monthIndex+"-"+date;

    const [showPosts , setShowPosts] = useState(false);
    if(showPosts) if(document.querySelectorAll(".tile").length) document.querySelectorAll(".tile").forEach(d=>d.style.height = "10px")
    if(!showPosts) if(document.querySelectorAll(".tile").length) document.querySelectorAll(".tile").forEach(d=>d.style.height = "calc(100vh/5)")
    const currMonth = useSelector((state) => state.month.month);
    const posts = useSelector((state)=> state.posts.posts);
    const filteredPosts = getPosts(posts,constructDate);
 
    const handleClick = () => {
        if(filteredPosts[0]){
            setShowPosts(true);
        }
    }
    const apiSection = () => {
        return(
            <React.Fragment>
                <div className="post-section">
                {filteredPosts[0] ?
                    <React.Fragment>  
                        <div className="stars">
                            <StarRatings
                                rating={filteredPosts[0].rating}
                                starRatedColor="rgba(96,165,250)"
                                numberOfStars={5}
                                name='rating'
                                starDimension="1.8vw"
                                starSpacing="1px"
                            />
                        </div>
                        <div className="post-and-code">
                            <div className="post-image">
                                <img src={filteredPosts[0].media[0].mediaurl} width={"100%"} alt="" />
                            </div>
                            <div className="codes">
                                {filteredPosts[0].typeofday.map((code,i) => {
                                    return <LegendCode uniqueId={constructDate+" "+i} code = {code} />
                                })} 
                            </div>
                        </div>
                    </React.Fragment>
                    :null
                }   
                </div>
            </React.Fragment>
        )
    }
    return (currMonth===month) ?
       <React.Fragment>
            <div className="tile" onClick={handleClick} style={{border:"1px solid black"}}>
                <h3>{date===1 ? date+" "+month: date!=="0null" ? date : ""}</h3> 
                {apiSection()}
            </div>
            {showPosts && filteredPosts[0] ? <div className="full-post-page"><Posts setShowPosts={setShowPosts} postsArr={filteredPosts} postDateMonth={[date,month]} /></div> : null}
        </React.Fragment>
        :
        <React.Fragment>
            <div className="tile" onClick={handleClick}>
                <h3 style={{color:"#808080"}}>{date===1 ? date+" "+month:date!=="0null" ? date : ""}</h3>
                {apiSection()} 
            </div>
            {showPosts && filteredPosts[0] ? <div className="full-post-page"><Posts setShowPosts={setShowPosts} postsArr={filteredPosts} postDateMonth={[date,month]} /></div> : null}
        </React.Fragment>
        
}

export default DayTile;