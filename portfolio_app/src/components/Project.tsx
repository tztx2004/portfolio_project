import { useState } from "react";
import { styled } from "styled-components"

const ProjectWrap = styled.div`
    width: 100%;
    height: 90%;
    background: var(--blueC);
    color: var(--whiteC);
    display: flex;
    align-items: center;
    justify-content: center;

    .project{
        width: 80%;
        height: 80%;
        display: flex;
        margin: 0 auto;
    }
`;

const Project = ()=>{
    const [pjnum, setPjnum] = useState(0)

    const pjArr = [
        {
            'id':1,
            'title':"Apple iPhone 14 Pro",
            'data': "2023.03 ~ 2023.04",
            'desc': ``,
            'url': '',
            'tags': [[],[],[]]
        },
        {
            'id':2,
            'title':"NASA",
            'data': "2023.04 ~ 2023.05",
            'desc': ``,
            'url': '',
            'tags': [[],[],[]]
        },
        {
            'id':3,
            'title':"그림판매 사이트",
            'data': "2023.05 ~ 2023.06",
            'desc': ``,
            'url': '',
            'tags': [[],[],[]]
        },
        {
            'id':4,
            'title':"AI MODEL",
            'data': "2023.06 ~ 2023.07",
            'desc': ``,
            'url': '',
            'tags': [[],[],[]]
        },
    ]

    return(
        <ProjectWrap>
            <div className="project">
                <h2 className="pjTitle">Project</h2>
                <div className="pjContent">
                    <div className="numSliderPart">
                        <span className="left_arrow"> ← </span>
                        <span>{pjArr[0].id} / {pjArr.length}</span>
                        <span className="right_arrow"> → </span>
                    </div>

                </div>
            </div>
        </ProjectWrap>
    )
}

export default Project