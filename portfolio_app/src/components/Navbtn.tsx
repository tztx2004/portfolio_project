import { styled } from "styled-components";

type Direction = "right" | "left";

type NavbtnProps = {
    direction: Direction;
    onClick?: () => void;
}

const Btn = styled.div<{ $direction: Direction }>`
    position: fixed;
    ${props=>props.$direction}: 30px;
    top: 50%;
    z-index: 1;

    width: 60px;
    height: 60px;
    border-bottom: 2px solid var(--skyC);
    border-left: 2px solid var(--skyC);

    transform: translateY(-50%) rotate(${props=>props.$direction ==="left"? '45': '225'}deg);
    cursor: pointer;

    @media screen and (max-width: 500px){
        ${props=>props.$direction}: 20px;
        width: 30px;
        height: 30px;
    }
`;

const Navbtn = ({direction, onClick}:NavbtnProps)=>{
    return(
        <Btn
            className="Navbtn"
            $direction={direction}
            onClick={onClick}
            role="button"
            aria-label={direction === "left" ? "이전 페이지" : "다음 페이지"}
        />
    )
}

export default Navbtn
