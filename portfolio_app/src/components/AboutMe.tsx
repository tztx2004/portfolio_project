import { txtArr } from "../fixtures/aboutMe";
import { styled } from "styled-components";

const About = () => {
  return (
    <AboutWrapper>
      <AboutWrap>
        <div className="year_part">
          <h2>Front-end</h2>
          <h3>Developer;</h3>
        </div>
        <div className="txt_part">
          <div className="txt_title">
            <h2>안녕하세요. React.JS, Javascript 개발자 정찬입니다.</h2>
          </div>
          <div className="txt_sum">
            {txtArr.map((x, i) => (
              <div key={i} className="txtObj">
                <h3>{x.title}</h3>
                <p>
                  {x.summary}
                  <br />
                  {x.summary2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AboutWrap>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  height: 100%;
  animation: fadein 0.8s;
  background: var(--whiteC);
`;

const AboutWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 10%;
  align-items: center;
  margin: 0 auto;

  .year_part {
    color: var(--blueC);
    font-size: 30px;
    margin-bottom: 25%;
    min-width: 150px;

    > h2 {
      word-break: keep-all;
      font-size: max(32px, 2vw);
    }
    > h3 {
      font-size: max(24px, 1.5vw);
    }
  }
  .txt_part {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (max-height: 800px) {
    .txt_sum {
      grid-template-columns: repeat(1, minmax(auto, 1fr));
    }
  }

  .txt_title h2 {
    font-size: max(24px, 2vw);
  }
  .txt_sum {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 20px;
  }

  .txtObj h3 {
    font-size: 2vw;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .txtObj p {
    font-size: 14px;
    text-align: justify;
    word-break: keep-all;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    .year_part {
      margin: 0;
    }
    .txt_title > h2 {
      font-size: max(20px, 2vw);
    }
    .txt_sum {
      margin-top: 7vh;
    }
    .txtObj h3 {
      font-size: max(20px, 2.5vw);
    }
    .txtObj p {
      font-size: max(16px, 2vw);
    }
  }
  @media screen and (max-width: 600px) {
    .txtObj {
      padding: 0 10px;
    }
    .txt_sum {
      grid-template-columns: repeat(1, minmax(auto, 1fr));
      height: 300px;
      overflow-y: auto; /* 수직 스크롤바 추가 */
    }
  }
`;

export default About;
