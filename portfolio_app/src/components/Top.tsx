import { Dispatch, SetStateAction, useState } from "react";

import "../style/top.css";

export interface PropsTop {
    logo: string;
    mail: string;
    navbar: string[];
    theme?: string;
    setPage: Dispatch<SetStateAction<number>>
}

type NavBarProps = {
    navbar: string[]
    setNavSt: Dispatch<SetStateAction<boolean>>
    setPage: Dispatch<SetStateAction<number>>
}

function NavBar({ navbar, setNavSt, setPage }: NavBarProps){

    const handleClick = (page: number)=>{
        setPage(page)
        setNavSt(false);
    }

    return(
        <div className="navBar">
            <div className="nav_wrap">
                <button className="closedBtn" onClick={()=>setNavSt(false)}></button>
                <ul>
                    {
                        navbar.map((x, i) => (
                            <li key={x}>
                                <button className="navLink" onClick={()=>handleClick(i+1)}>{x}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default function Top({ logo, mail, navbar, theme, setPage }: PropsTop) {
    // 네비게이션 버튼 활성화 변수
    const [navSt, setNavSt] = useState(false)

    return (
        <div id="top" className={theme === "light" ? "light" : ""}>
            <div className="topBar">
                <div className="logo">{logo}</div>
                <div className="mail">Contact : {mail}</div>
                <div className="hambtn" onClick={()=>setNavSt(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {navSt && <NavBar navbar={navbar} setNavSt={setNavSt} setPage={setPage} />}
        </div>
    );
}
