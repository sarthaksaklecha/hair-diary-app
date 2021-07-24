
export const HandleScroll = (dispatch) => {
    window.addEventListener("scroll",(e)=> {
        const scrollY = e.path[1].scrollY;
        if(scrollY >= 0 && scrollY < 575) dispatch({type:"UPDATE",payload:"Aug"})
        if(scrollY >= 575 && scrollY < 1175) dispatch({type:"UPDATE",payload:"Sep"})
        if(scrollY >= 1175 && scrollY < 1872) dispatch({type:"UPDATE",payload:"Oct"})
        if(scrollY >= 1872 && scrollY < 2497) dispatch({type:"UPDATE",payload:"Nov"})
        if(scrollY >= 2497) dispatch({type:"UPDATE",payload:"Dec"})
    })

}

