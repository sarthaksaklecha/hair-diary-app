import React from "react";
import "./Post.css";
import LegendCode from "../LegendCodes/legendCodes";
import StarRatings from 'react-star-ratings';

const shortToFull = {
    "Aug" : "August",
    "Sep" : "September",
    "Oct"  : "October",
    "Nov" : "November",
    "Dec" : "December"
}
const Post = ({postData,postDateMonth}) => {

    console.log(postData);
    const image = postData.media[0].mediaurl;
    const rating = postData.rating;
    const postContent = postData.text;
    const LegendCodes = postData.typeofday;
    const Date = postDateMonth[0];
    const Month = postDateMonth[1];

    return (
        <div className="post">
            <div className="post-img">
                <img src={image} alt="post-image" />
            </div>
            <div className="star-legend-codes">
                <div className="posts-legend-codes">
                    {LegendCodes.map((code,i) => <LegendCode size={"large"} uniqueId={postData.id+""+code+i} code={code} />)}
                </div>
                <div className="post-stars">
                    <StarRatings
                        rating={rating}
                        starRatedColor="rgba(96,165,250)"
                        numberOfStars={5}
                        name='rating'
                        starDimension="25px"
                        starSpacing="1px"
                    />
                </div>
            </div>
            <div className="Date">
                {Date+ " " + shortToFull[Month]}
            </div>
            <div className="post-content">
                {postContent}
            </div>
            <div className="show-full-post-btn">
                View Full Post
            </div>
        </div>
    )
}

export default Post;