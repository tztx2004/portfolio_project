import { styled, keyframes } from "styled-components"

const percentageBarMoveAnimation = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: var(--widthTarget);
    }
`

const SkillPart = styled.div`
    width: 100%;
    height: 100%;
    background: var(--whiteC);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .skTitle{
        font-size: 4vw;
    }
    .skill{
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 60%;

        .skill_content_part{
            animation: fadein .8s;
            display: flex;
            height: 100%;
            justify-content: space-around;
        }
        .left_box{
            width: 45%;
            background: url(./images/skills.png) no-repeat center/cover;
            background-size: 80%;
            background-position-y: 10%;
        }

        .right_box{
            h2{
                font-size: 1.8vw;
                margin-bottom: 2%;
            }
            .tagbox{
                color: var(--skyC);
                margin-bottom: 10%;
                font-size: 1vw;
            }
            .item{
                margin-bottom:5%;
                h3{
                    font-size: 1.5vw
                }
            }
            .progress_bar{
                height: 5px;
                width: 100%;
                background: #888;
                position: relative;
            }
            .progress_bar>div{
                height: 100%;
                position: absolute;
                background: var(--blueC);
            }
        }

        @media screen and (max-width: 800px){
            height: 80%;

            .skill_content_part{
                flex-direction: column;
                align-items: center;
                .left_box{
                    aspect-ratio: 1/1;
                }
            }
            .right_box{
                width: 80%;
                >h2{
                    font-size: 2.7vw;
                }
                .tagbox{
                    font-size: 1.5vw;
                }
                .item h3{
                    font-size: 2vw;
                }
            }
        }

        @media screen and (max-width: 500px){
            .left_box{
                width: 80%;
            }
            .skill_content_part{
                justify-content: center;
            }
            .right_box{
                >h2{
                    font-size: 5vw;
                }
                .item h3{
                    font-size: 3vw;
                }

            }
        }
    }
`

const ProgressBar = styled.div<{ percent: string }>`
    height: 5px;
    width: 100%;
    background: #888;
    position: relative;
    &:before {
        content: '';
        height: 100%;
        position: absolute;
        background: var(--blueC);
        --widthTarget: ${props => props.percent};
        width: ${props => props.percent};
        animation: ${percentageBarMoveAnimation} 1s;
    }
`;

const Skills = ()=>{
    const tagbox = ['React.JS','Vue.JS','Vuex','jQuery','Javascript','HTML5','CSS3',]
    const stack = [
        {
            title:"React.JS",
            score:"80%"
        },
        {
            title:"Javascript",
            score:"80%"
        },
        {
            title:"HTML5, CSS3",
            score:"70%"
        },
        {
            title:"Vue.JS",
            score:"60%"
        },
        {
            title:"jQuery",
            score:"60%"
        },
    ]
    return(
        <SkillPart>
            <div className="skill">
                <h2 className="skTitle">Skills</h2>
                <div className="skill_content_part">
                    <div className="left_box"></div>
                    <div className="right_box">
                        <h2>React.JS를 이용한 개발에 가장 자신있습니다.</h2>
                        <p className="tagbox">
                            {
                                tagbox.map((x,i)=>
                                    <span key={i}>
                                        #{x}
                                    </span>
                                )
                            }
                        </p>
                        <div className="stack_box">
                            {
                                stack.map((x,i)=>
                                    <div key={i} className="item">
                                        <h3>{x.title}({x.score})</h3>
                                        <ProgressBar percent={x.score} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </SkillPart>
    )
}

export default Skills