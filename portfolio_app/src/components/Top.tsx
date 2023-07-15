import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";

import "../style/top.css";

export interface PropsTop {
    logo: string;
    mail: string;
    navbar: string[];
    theme?: string;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

type Navbar = {
    navbar: string[]
    navSt: boolean
    setNavSt: Dispatch<SetStateAction<boolean>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

function NavBar({ navbar, navSt, setNavSt, setPage } :Navbar){
    
    const handleclick = (e:MouseEvent, i:number)=>{
        e.preventDefault();
        setPage(i)
        setNavSt(false);
    }

    return(
        <div className="navBar">
            <div className="nav_wrap">
                <button className="closedBtn" onClick={()=>setNavSt(false)}></button>
                <ul>
                    {
                        navbar.map((x, i) => (
                            <li key={i}>
                                <a href="#" onClick={(e)=>handleclick(e, i+1)}>{x}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}



export default function Top(props: PropsTop): JSX.Element {
    const { logo, mail, navbar, theme, setPage } = props;
    
    // 네비게이션 버튼 활성화 변수
    const [navSt, setNavSt] = useState<boolean>(false)
    useEffect(()=>{
        let test = document.querySelector("#top")
        theme === "light"? test?.classList.add("light"): test?.classList.remove("light")
    })

    return (
        <div id="top">
            <div className="topBar">
                <div className="logo">{logo}</div>
                <div className="mail">Contact : {mail}</div>
                <div className="hambtn" onClick={()=>setNavSt(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {navSt && <NavBar navbar={props.navbar} navSt={navSt} setNavSt={setNavSt} setPage={setPage} />}
        </div>
    );
}
