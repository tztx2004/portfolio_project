import { pjArr } from "../fixtures/project";
import { useState } from "react";
import { styled } from "styled-components";

const sortedPjArr = [...pjArr].sort((a, b) => b.id - a.id);

const Project = () => {
  const [pjnum, setPjnum] = useState(0);

  const showPrev = () => setPjnum((prev) => Math.max(prev - 1, 0));
  const showNext = () =>
    setPjnum((prev) => Math.min(prev + 1, sortedPjArr.length - 1));

  return (
    <ProjectWrap>
      <div className="project">
        <h2 className="pjTitle">Project & Experience</h2>
        <div className="pjContent">
          <div className="numSliderPart">
            <span className="left_arrow" onClick={showPrev}>
              ←
            </span>
            <span>
              {pjnum + 1} / {sortedPjArr.length}
            </span>
            <span className="right_arrow" onClick={showNext}>
              →
            </span>
          </div>

          {sortedPjArr.map((x, i) => (
            <div
              key={x.id}
              className={i === pjnum ? "sliderItem on" : "sliderItem"}
            >
              <section className="slider_section">
                <div className="header">
                  <div className="left_container">
                    <h2>{x.title}</h2>
                    <h3>{x.date}</h3>
                    <div className="stack_container">
                      {x.tags.map(([logo, name]) => (
                        <div key={name}>
                          <img src={logo} alt={name} />
                          <p style={name.length > 10 ? { fontSize: "10px" } : undefined}>
                            {name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="desc">
                      <p>{x.desc}</p>
                    </div>
                  </div>
                  <div className="right_container">
                    <a href={x.url} target="_blank" rel="noreferrer">
                      <img src={x.thumb} alt={x.title + " 사진"} />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </ProjectWrap>
  );
};

const ProjectWrap = styled.div`
  width: 100%;
  height: 100%;
  background: var(--blueC);
  color: var(--whiteC);
  display: flex;
  align-items: center;
  justify-content: center;

  .project {
    width: 70%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .pjTitle {
    width: 100%;
    font-size: 4vw;
  }
  .pjContent {
    position: relative;
    height: 100%;
  }
  .numSliderPart {
    position: absolute;
    top: -30px;
    right: 0;
    width: 20%;
    color: var(--skyC);
    display: flex;
    justify-content: space-between;
    font-size: 1.5vw;
  }
  .left_arrow,
  .right_arrow {
    cursor: pointer;
    user-select: none;
  }
  .left_arrow:hover,
  .right_arrow:hover {
    color: var(--whiteC);
  }

  .sliderItem {
    position: absolute;
    z-index: 0;
    opacity: 0;
  }
  .sliderItem.on {
    z-index: 1;
    opacity: 1;
    animation: fadein 0.8s;
  }

  .stack_container {
    width: 100%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, minmax(50px, 1fr));
    gap: 5px;
  }
  .stack_container > div {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--whiteC);
    border-radius: 10px;
    aspect-ratio: 1/1;
    transition: 0.8s;
  }
  .stack_container > div:hover {
    transform: translateY(-10%);
  }
  .stack_container img {
    width: 60%;
    height: 70%;
    box-sizing: border-box;
    padding: 10%;
  }
  .stack_container p {
    display: flex;
    justify-content: center;

    width: 60%;
    color: var(--blueC);
    border-top: 1px solid #000;
  }

  .slider_section {
    padding: 1%;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .left_container {
    width: 45%;
  }
  .left_container > h2 {
    font-size: 2.5vw;
    color: var(--yellowC);
  }
  .desc {
    margin-top: 10%;
    width: 100%;
    word-break: keep-all;
    text-align: justify;
    line-height: 1.4;
  }
  .right_container {
    width: 50%;
  }
  .right_container img {
    width: 100%;
    border-radius: 20px;
    transition: 0.8s;
    box-shadow: 5px 5px 5px 0px var(--skyC);
  }
  .right_container img:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 750px) {
    .header {
      flex-direction: column-reverse;
    }
    .numSliderPart {
      font-size: 2.5vw;
    }
    .right_container {
      width: 60%;
      margin: 0 auto;
    }
    .left_container {
      width: 80%;
      margin: 0 auto;
      margin-top: 15px;
      text-align: center;
      > h3 {
        font-size: 2vw;
      }
      .stack_container {
        margin: 0 auto;
      }
    }
    .desc {
      margin: 0 auto;
      margin-top: 5%;
    }
  }

  @media screen and (max-width: 450px) {
    .left_container {
      > h2 {
        font-size: 5vw;
      }
    }
    .numSliderPart {
      font-size: 3.2vw;
    }
    .right_container {
      width: 80%;
    }
    .desc p {
      font-size: 3vw;
    }
    .stack_container p {
      font-size: 12px;
    }
  }
`;

export default Project;
