import { styled } from "styled-components";

const AboutWrapper = styled.div`
    height: 100%;
    animation: fadein .8s;
    background: var(--whiteC);
`

const AboutWrap = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    margin: 0 auto;

    .year_part{
        color: var(--blueC);
        font-size: 30px;
        margin-bottom: 25%;
    }

    .txt_title h2{
        font-size: 2vw;
    }
    .txt_sum{
        margin-top: 10vh;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 1fr));
        gap: 20px;
    }
    .txtObj{
        width: 85%;
    }
    .txtObj h3{
        font-size: 1.5vw;
        margin-bottom: 5px;
    }
    .txtObj p{
        font-size: 1vw;
    }
`

const About = ()=>{
    const txtArr = [
        {
            title: "다양한 역량 보유",
            summary:`HTML, CSS, JavaScript를 비롯한 다양한 웹 기술 스택에 대한 깊은 이해를 갖고 있으며, 현재는 React와 Vue.js와 같은 인기 있는 라이브러리도 숙련되어 있습니다.`,
            summary2:` 이를 통해 다양한 웹 애플리케이션 개발에 유연하게 대응할 수 있습니다.`,
        },
        {
            title: "창의적 문제 해결력",
            summary:"복잡한 UI/UX 요구사항을 만족시키는 독창적인 디자인 및 개발 방법을 제시할 수 있습니다.",
            summary2:"또한, 버그나 성능 문제와 같은 기술적인 도전에 직면했을 때도 분석하고 문제를 해결하는 능력을 가지고 있습니다.",
        },
        {
            title: "사용자 중심의 접근",
            summary:"사용자 경험에 대한 깊은 이해와 중요성을 인지하고 있습니다.",
            summary2:"사용자 피드백을 수집하고 반영하여 지속적인 개선을 추구합니다.",
        },
        {
            title: "팀 협업과 커뮤니케이션",
            summary:"개발자, 디자이너 및 기타 이해관계자와 원활한 협업을 통해 프로젝트의 목표 달성을 위해 노력합니다. ",
            summary2:"의사소통, 문제 해결, 일정 관리 등 다양한 측면에서 팀의 성과 향상에 기여합니다.",
        },
    ];

    return(
        <AboutWrapper>
            <AboutWrap>
                <div className="year_part">
                    <h2>FreshMan</h2>
                    <h3>Developer;</h3>
                </div>
                <div className="txt_part">
                    <div className="txt_title">
                        <h2>안녕하세요. React.JS, Javascript 개발자 정찬입니다.</h2>
                    </div>
                    <div className="txt_sum">
                        {
                            txtArr.map((x,i)=>
                                <div key={i} className="txtObj">
                                    <h3>{x.title}</h3>
                                    <p>{x.summary}<br />{x.summary2}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </AboutWrap>
        </AboutWrapper>
    )
}

export default About;