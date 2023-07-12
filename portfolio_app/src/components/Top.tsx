import React, { Dispatch, SetStateAction, useState } from "react";

import "../style/top.css";

export interface PropsTop {
    logo: string;
    mail: string;
    navbar: string[];
}

type Navbar = {
    navbar: string[]
    navSt: boolean
    setNavSt: Dispatch<SetStateAction<boolean>>
}

function NavBar({ navbar, navSt, setNavSt } :Navbar){
    
    return(
        <div className="navBar">
            <div className="nav_wrap">
                <button className="closedBtn" onClick={()=>setNavSt(false)}></button>
                <ul>
                    {
                        navbar.map((x, i) => (
                            <li key={i}>
                                <a href="#">{x}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}



export default function Top(props: PropsTop): JSX.Element {
    const { logo, mail, navbar } = props;
    
    // 네비게이션 버튼 활성화 변수
    const [navSt, setNavSt] = useState<boolean>(false)
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
            {navSt && <NavBar navbar={props.navbar} navSt={navSt} setNavSt={setNavSt}/>}
        </div>
    );
}
