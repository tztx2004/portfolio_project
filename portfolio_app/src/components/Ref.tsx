import { styled } from "styled-components";

const RefWrap = styled.div`
    position: fixed;
    width: 50%;
    height: 60px;
    bottom: 0;
    left: 5%;
    color: #888;
    font-size: 1vw;
`

const Ref = ()=>{
    return(
        <RefWrap>
            <div>
                <h3>Made by Chan Jung</h3>
                <h3>Referenced : MinSeok Kim</h3>
            </div>
        </RefWrap>
    )
};

export default Ref