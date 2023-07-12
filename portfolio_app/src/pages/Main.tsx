import Navbtn from "../components/Navbtn";
import Top from "../components/Top";
import Home from "../components/home";

const Main = ()=>{
    return(
        <>
            <Top logo="CHAN" mail='tztx2004@gmail.com' navbar = {["Home","About Me","Project","Skills","Info"]} />
            <Navbtn/>
            <Home/>
        </>
    )
}

export default Main;