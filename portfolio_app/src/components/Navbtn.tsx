import { useEffect, useState, ChangeEvent, MouseEvent, Dispatch, SetStateAction } from "react";
import { styled } from "styled-components"

type NavbtnType = {
    direction: 'right' | 'left';
    onClick?: Function;
    page?: number;
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

    @media screen and (max-width: 500px){
        ${props=>props.direction}: 20px;
        width: 30px;
        height: 30px;
    }
`;

const Navbtn = ({direction, page, onClick}:NavbtnType)=>{
    return( 
        <Btn className="Navbtn" direction ={direction} page={page} onClick={onClick}/>
    )
}

export default Navbtn