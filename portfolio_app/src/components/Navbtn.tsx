import { useEffect, useState } from "react";
import { styled } from "styled-components"

type NavbtnType = {
    direction: 'right' | 'left';
    onClick?: ()=>void
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

const Navbtn = ({direction, onClick}:NavbtnType)=>{
    const [page, setPage] = useState(0)
    type Test = React.MouseEvent
    const slide = (e:Test)=>{
        return console.log("slide!!!",e.currentTarget)

    }


    return( 
        <Btn className="Navbtn" direction ={direction} onClick={()=>slide}></Btn>
    )
}

export default Navbtn