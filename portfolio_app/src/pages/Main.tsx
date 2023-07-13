import { useEffect, useState } from "react";
import Navbtn from "../components/Navbtn";
import PageCounter from "../components/PageCounter";
import Top from "../components/Top";
import Home from "../components/home";
import About from "../components/AboutMe";

const Main = ()=>{

    useEffect(()=>{
        let all = document.getElementsByClassName('Navbtn');

        return ()=>{}
    })

    return(
        <>
            <Top logo="CHAN" mail='tztx2004@gmail.com' navbar = {["Home","About Me","Project","Skills","Info"]} />
            <Navbtn direction="right" />
            {/* <Home /> */}
            <About/>
            <PageCounter page={1} />
        </>
    )
}

export default Main;