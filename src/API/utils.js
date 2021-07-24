

export const getPosts = (posts,constructDate ) => {
    let filteredPosts = posts.filter(post => {
       return post.calendardatetime.slice(0,10) === constructDate
    });
    
    // filteredPosts.length ? console.log("date: "+date+" month: "+monthIndex+" "+filteredPosts[0].calendardatetime) : console.log("date: "+date+" month: "+monthIndex)

  
    return filteredPosts;
}