import { useState } from "react";
import { styled } from "styled-components";
import Navbtn from "../components/Navbtn";
import PageCounter from "../components/PageCounter";
import Top from "../components/Top";
import Home from "../components/Home";
import About from "../components/AboutMe";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Info from "../components/Info";

const LAST_PAGE = 5;

const RefWrap = styled.div`
  position: fixed;
  width: 50%;
  bottom: 30px;
  left: 5%;
  color: #888;
  font-size: max(14px, 1vw);
`;

const Ref = () => {
  return (
    <RefWrap>
      <h3>Made by Chan Jung</h3>
    </RefWrap>
  );
};

const Main = () => {
  const [page, setPage] = useState(1);

  const slide = (direction: "left" | "right") => {
    setPage((prev) =>
      direction === "left"
        ? Math.max(prev - 1, 1)
        : Math.min(prev + 1, LAST_PAGE)
    );
  };

  return (
    <>
      <Top
        logo="CHAN"
        mail="tztx2004@gmail.com"
        navbar={["Home", "About Me", "Project", "Skills", "Info"]}
        theme={page === 2 || page === 4 || page === 5 ? "light" : ""}
        setPage={setPage}
      />
      {page < LAST_PAGE && (
        <Navbtn direction="right" onClick={() => slide("right")} />
      )}
      {page > 1 && <Navbtn direction="left" onClick={() => slide("left")} />}

      {page === 1 && <Home />}
      {page === 2 && <About />}
      {page === 3 && <Project />}
      {page === 4 && <Skills />}
      {page === 5 && <Info />}

      <Ref />
      <PageCounter page={page} />
    </>
  );
};

export default Main;
