import { MouseEvent, useEffect, useState } from "react";
import Navbtn from "../components/Navbtn";
import PageCounter from "../components/PageCounter";
import Top from "../components/Top";
import Home from "../components/home";
import About from "../components/AboutMe";
import Project from "../components/Project";
import Skills from "../components/Skills";


const Main = ()=>{
    let [page, setPage] = useState<number>(4)
    
    const slide = (e: MouseEvent) => {
        let target = e.currentTarget;
        console.log("slide", target)
        
        target.getAttribute("direction") === "left"? setPage(page--) : setPage(page++)
        console.log("slide!!!",target.getAttribute("direction"),page)
    }

    useEffect(()=>{
        let all = document.getElementsByClassName('Navbtn');
        
        return ()=>{}
    })

    return(
        <>
            <Top
                logo="CHAN"
                mail='tztx2004@gmail.com' 
                navbar = {["Home","About Me","Project","Skills","Info"]}
                
                />
            {page<5 && <Navbtn direction="right" page={page} onClick={(e: MouseEvent)=>slide(e)} />}
            {page>1 && <Navbtn direction="left" page={page} onClick={slide}  />}

            {page === 1 && <Home />}
            {page === 2  && <About/>}
            {page === 3  && <Project/>}
            {page === 4  && <Skills />}

            <PageCounter page={page} />
        </>
    )
}

export default Main;