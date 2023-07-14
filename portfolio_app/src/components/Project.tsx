import { useEffect, useState } from "react";
import { styled } from "styled-components"

// stacks
const css = '/images/logo/CSS.svg';
const html = '/images/logo/HTML.svg';
const js = '/images/logo/JS.svg';
const react = '/images/logo/React.svg';
const github = '/images/logo/GITHUB.svg';
const vue = '/images/logo/Vue.svg';
const jquery = '/images/logo/jquery.svg';


const ProjectWrap = styled.div`
    width: 100%;
    height: 90%;
    background: var(--blueC);
    color: var(--whiteC);
    display: flex;
    align-items: center;
    justify-content: center;

    .project{
        width: 70%;
        height: 85%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        // justify-content: center;
    }
    .pjTitle{
        width: 100%;
        font-size: 4vw;
    }
    .pjContent{
        position: relative;
        height: 100%
    }
    .numSliderPart{
        position: absolute;
        top: -30px;
        right: 0;
        width: 20%;
        height: 30px;
        color: #888;
        display: flex;
        justify-content: space-between;
        font-size: 1.5vw;
    }
    .left_arrow,
    .right_arrow{
        cursor: pointer;
        user-select: none;
    }
    .left_arrow:hover,
    .right_arrow:hover{
        color:var(--whiteC);
    }

    .sliderItem{
        position: absolute;
        z-index: 0;
        opacity: 0;
    }
    .sliderItem.on{
        z-index: 1;
        opacity: 1;
    }
    
    .stack_container{
        width: 80%;
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, minmax(50px, 1fr));
        gap: 5px;
    }
    .stack_container>div{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:var(--whiteC);
        border-radius: 10px;
        aspect-ratio: 1/1;
    }
    // .stack_container>div:hover{
    //     animation: pop .8s;
    // }
    .stack_container img{
        width: 60%;
        height: 70%;
        box-sizing: border-box;
        padding: 10%;
    }
    .stack_container p{
        display:flex;
        justify-content: center;

        width: 60%;
        color: var(--blueC);
        border-top: 1px solid #000;
    }

    .slider_section{
        padding: 1%;
    }
    .header{
        display: flex;
        justify-content: space-between;
    }
    .left_container{
        width: 45%;
    }
    .left_container>h2{
        font-size: 2.5vw;
        color: var(--yellowC);
    }
    .desc{
        margin-top: 10%;
        width: 90%;
        word-break: keep-all;
    }
    .right_container{
        width: 50%;
    }
    .right_container img{
        width: 100%;
        border-radius: 20px;
    }
`;




const Project = ()=>{
    let [pjnum, setPjnum] = useState<number>(0)

    const pjArr = [
        {
            'id':1,
            'title':"Apple iPhone 14 Pro",
            'date': "2023.03 ~ 2023.04",
            'thumb':'./images/apple.png',
            'url': 'https://tztx2004.github.io./FED-PJ-WBS-CHAN/01.%EC%9B%B9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/apple.html',
            'tags': [[js,'js'],[html,'html'],[css,'css'],[github,'github'],],
            'desc': `애플사의 아이폰을 주제로 웹페이지를 제작하였습니다. Javascript와 기본 markup을 사용하여 만들었던 프로젝트입니다. 처음으로 만든 프로젝트로 스크롤 이벤트를 주로 사용하여 다양한 효과를 주었습니다. 또한, 슬라이드 기능, 반응형 디자인 등을 신경써서 만들었습니다.`,
        },
        {
            'id':2,
            'title':"NASA",
            'date': "2023.04 ~ 2023.05",
            'thumb':'./images/nasa.png',
            'url': 'https://tztx2004.github.io./FED-PJ-WBS-CHAN/04.%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/solarsystem/main.html',
            'tags': [[js,'js'],[html,'html'],[css,'css'],[github,'github'],],
            'desc': ``,
        },
        {
            'id':3,
            'title':"그림판매 사이트",
            'date': "2023.05 ~ 2023.06",
            'thumb':'./images/musium.png',
            'url': 'https://tztx2004.github.io./FED-PJ-WBS-CHAN/02.%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9B%B9&%EC%95%B1%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/index.html',
            'tags': [[vue,'vue'],[jquery,'jquery'],[js,'js'],[html,'html'],[css,'css'],[github,'github'],],
            'desc': ``,
        },
        {
            'id':4,
            'title':"AI MODEL",
            'date': "2023.06 ~ 2023.07",
            'thumb':'./images/ai.png',
            'url': 'https://spa-ai.vercel.app/Main',
            'tags': [[react,'react'],[jquery,'jquery'],[js,'js'],[html,'html'],[css,'css'],[github,'github'],],
            'desc': ``,
        },
    ]


    useEffect(() => {
        // 초기값
        if(pjnum === 0) document.querySelector(`.pjContent .sliderItem:nth-child(2)`)?.classList.add('on')

        const handleRightArrowClick = () => {
            if(pjnum<pjArr.length-1) setPjnum(++pjnum);
            let prevSi = document.querySelector(`.pjContent .sliderItem:nth-child(${pjnum+1})`)
            prevSi?.classList.remove("on")
            let si = document.querySelector(`.pjContent .sliderItem:nth-child(${pjnum+2})`)
            si?.classList.add("on")
        };

        const handleLeftArrowClick = () => {
            if(pjnum>0) setPjnum(--pjnum);
            let afterSi = document.querySelector(`.pjContent .sliderItem:nth-child(${pjnum+3})`)
            afterSi?.classList.remove("on")
            let si = document.querySelector(`.pjContent .sliderItem:nth-child(${pjnum+2})`)
            si?.classList.add("on")
        };

        document.querySelector(".right_arrow")?.addEventListener("click", handleRightArrowClick);
        document.querySelector(".left_arrow")?.addEventListener("click", handleLeftArrowClick);

        return () => {
            document.querySelector(".right_arrow")?.removeEventListener("click", handleRightArrowClick);
            document.querySelector(".left_arrow")?.removeEventListener("click", handleLeftArrowClick);
        };
    }, []);



    return(
        <ProjectWrap>
            <div className="project">
                <h2 className="pjTitle">Project</h2>
                <div className="pjContent">
                    <div className="numSliderPart">
                        <span className="left_arrow"> ← </span>
                        <span>{pjArr[pjnum].id} / {pjArr.length}</span>
                        <span className="right_arrow"> → </span>
                    </div>
                    {
                        pjArr.map((x,i)=>
                            <div key={i} className="sliderItem">
                                <section className="slider_section">
                                    <div className="header">
                                        <div className="left_container">
                                            <h2>{x.title}</h2>
                                            <h3>{x.date}</h3>
                                            <div className="stack_container">
                                                {x.tags.map((y,j)=>
                                                    <div key={j}>
                                                        <img src={y[0]} alt={y[1]} />
                                                        <p>{y[1]}</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="desc">
                                                <p>{x.desc}</p>
                                            </div>
                                        </div>
                                        <div className="right_container">
                                            <a href={x.url} target="_blank" rel="noreferrer">
                                                <img src={x.thumb} alt={x.title + "사진"} />
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )
                    }
                </div>
            </div>
        </ProjectWrap>
    )
}

export default Project