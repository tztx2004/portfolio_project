import { styled } from "styled-components"

type NavbtnType = {
    direction: 'right' | 'left';
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

const Navbtn = ({direction}:NavbtnType)=>{
    return( 
        <Btn direction ={direction}></Btn>
    )
}

export default Navbtn