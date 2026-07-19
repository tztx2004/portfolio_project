import { styled } from "styled-components"
import "../style/home.css"

const IntroHash = styled.div`
    margin-top: 10px;
    color: var(--skyC);
    user-select: none;
`

export default function Home(){
    const introhash:string[] = ["#문제해결력","#소통","#성장","#협력"]

    return(
        <div id="Home">
            <div className="homeWrap" style={{animation:"fadein 1s"}}>
                <div className="homeImg"></div>
                <div className="homeTxt">
                    <h2 className="intro">Front-End Developer;</h2>
                    <h1 className="introName">&lt;정찬 /&gt; 입니다</h1><br/><br/>
                    <h3 className="introDesc">문제를 해결하고 사용자 경험을 개선하는 개발자입니다;</h3>
                    <IntroHash>
                        {introhash.map((x,i)=><span key={i} className="introHash">{x}</span>)}
                    </IntroHash> 
                </div>
            </div>
        </div>
    )
}