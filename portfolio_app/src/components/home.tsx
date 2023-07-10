import "../style/home.css"
export default function Home(){
    return(
        <div id="Home">
            <div className="homeWrap">
                <div className="homeImg"></div>
                <div className="homeTxt">
                    <h2 className="intro">Front-End 웹개발자;</h2>
                    <h1 className="introName">&lt;정찬 /&gt; 입니다</h1>
                    <h3 className="introDesc">문제를 해결하고 사용자 경험을 개선하는 개발자입니다;</h3>
                </div>
            </div>
        </div>
    )
}