import { styled } from "styled-components";

const AboutWrapper = styled.div`
    height: 100%;

`

const AboutWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    transform: translateY(-10%);

    .year_part{
        color: var(--blueC);
        font-size: 30px;
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
    .txtObj h3{
        font-size: 1.5vw;
    }
    .txtObj p{
        font-size: 1vw;
    }
`

const About = ()=>{
    const txtArr = [
        {
            title: "title1",
            summary:"content1"
        },
        {
            title: "title2",
            summary:"content2"
        },
        {
            title: "title3",
            summary:"content3"
        },
        {
            title: "title4",
            summary:"content4"
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
                                    <p>{x.summary}</p>
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