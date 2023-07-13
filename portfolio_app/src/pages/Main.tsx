import { useEffect, useState } from "react";
import Navbtn from "../components/Navbtn";
import PageCounter from "../components/PageCounter";
import Top from "../components/Top";
import Home from "../components/home";
import About from "../components/AboutMe";

const onClick = (page:number)=>{
    console.log("onclick", page)
    
}

const Main = ()=>{
    let [page, setPage] = useState<number>(1)
    onClick(page)
    
    useEffect(()=>{
        // let all = document.getElementsByClassName('Navbtn');

        return ()=>{}
    })

    return(
        <>
            <Top
                logo="CHAN"
                mail='tztx2004@gmail.com' 
                navbar = {["Home","About Me","Project","Skills","Info"]}
                
                />
            {page<5 && <Navbtn direction="right" page={page} onClick={onClick} setPage={setPage} />}
            {page>1 && <Navbtn direction="left" page={page} onClick={onClick} setPage={setPage}  />}
            
            {page === 1 && <Home />}
            {page === 2  && <About/>}
            <PageCounter page={page} />
        </>
    )
}

export default Main;