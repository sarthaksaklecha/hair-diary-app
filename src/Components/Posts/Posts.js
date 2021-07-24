import React from "react"
import "./Posts.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import Post from "./Post/Post"

const Next = {
    direction: ">",
    name : "next"
};
const Prev = {
    direction: "<",
    name : "prev"
}


const Posts = ({postsArr,postDateMonth,setShowPosts}) => {
    function arrow(clickHandler){
        return postsArr.length>1 ? (
            <div onClick={clickHandler} className={"carousel-custom-arr"+" "+this.name}>
            {this.direction}
            </div>
        ) : null;
    }
    console.log(postsArr)
    return(
        <>
        <button onClick={()=>setShowPosts(false)} className="back-btn-posts">{"X"}</button>
        <Carousel renderArrowPrev={arrow.bind(Prev)} renderArrowNext={arrow.bind(Next)} showIndicators={false} showStatus={false} showArrows={true} emulateTouch>
            {postsArr.map((post) => <Post postData={post} postDateMonth={postDateMonth} />)}
        </Carousel>
        </>
    )
}

export default Posts;