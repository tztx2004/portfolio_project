import { useEffect, useState, ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import { styled } from "styled-components"

type NavbtnType = {
    direction: 'right' | 'left';
    onClick?: Function;
    page: number;
    setPage: Dispatch<SetStateAction<number>>
}

const Btn = styled.div<NavbtnType>`
    position: fixed;
    ${props=>props.direction}: 30px;
    top: 50%;
    z-index: 1;

    width: 60px;
    height: 60px;
    border-bottom: 2px solid var(--skyC);
    border-left: 2px solid var(--skyC);

    transform: translateY(-50%) rotate(${props=>props.direction ==="left"? '45': '225'}deg);
    cursor: pointer;
`;

const Navbtn = ({direction, onClick, page, setPage}:NavbtnType)=>{
    

    const slide = (e: MouseEvent) => {
        let target = e.currentTarget;
        target.getAttribute("direction") === "left"? setPage(page--) : setPage(page++)
        console.log("slide!!!",target.getAttribute("direction"),page)
    }


    return( 
        <Btn className="Navbtn" direction ={direction} onClick={slide} page={page} setPage={setPage} />
    )
}

export default Navbtn