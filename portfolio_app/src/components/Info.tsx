import { styled } from "styled-components"

const InfoWrap = styled.div`
    width: 100%;
    height: 100%;
    background: var(--whiteC);
    display: flex;
    align-items: center;
    justify-content: center;

    .info{
        width: 70%;
        height: 60%;
        animation: fadein .8s;

        >h2{
            font-size: 4vw;
            margin-bottom: 5%;
        }
        >div{
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(auto, 1fr));
            box-sizing: border-box;
            padding: 2% 0%;
        }

    }
`;

const Info = ()=>{
    const infoArr = [
        {
            title:"Email",
            cont:"tztx2004@gmail.com"
        },
        {
            title:"Git Hub",
            cont:"https://github.com/tztx2004"
        },
        {
            title:"주소지",
            cont:"경기도 성남시"
        },
        {
            title:"",
            cont:""
        },
        {
            title:"",
            cont:""
        },
        {
            title:"",
            cont:""
        },
    ]

    return(
        <InfoWrap>
            <div className="info">
                <h2>INFO</h2>
                <div className="info_content">
                    {  
                        infoArr.map((x,i)=>
                            <div key={i} className="info_item">
                                <h2>
                                    {x.title}
                                </h2>
                                <p>
                                    {x.cont}
                                </p>
                            </div>
                    )}
                </div>
            </div>
        </InfoWrap>
    )
}

export default Info