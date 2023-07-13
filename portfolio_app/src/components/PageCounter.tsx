import React from "react";
import { styled } from "styled-components";
type PageType={

}
const Page = styled.div<PageType>`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;

    width: 60px;
    height: 60px;
    background: #111;
    color: var(--whiteC);
    border-radius: 5px 0 0 0;

    display: flex;
    align-items: center;
    -webkit-box-align: center;
    justify-content: center;
    -webkit-box-pack: center;
`

// type PageCounterType = {
//     page:number
// }

const PageCounter/* : React.FC<PageCounterType> */=
({page}:{page:number})=>{
    return(
        <Page>
            <h2 className="counter">{page}</h2>
        </Page>
    )
}

export default PageCounter;