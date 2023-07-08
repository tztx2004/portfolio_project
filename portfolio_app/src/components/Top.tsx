import "../style/top.css"
interface test{
    // props에 type 어떻게 지정해야될지 고민
}


export default function Top(props:test){
    return(
        <div id="top">
            <div className="logo">CHAN</div>
            <div className="mail"></div>
            <div className="hambtn"></div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Project</li>
                    <li>Skills</li>
                    <li>Info</li>
                </ul>
            </div>
        </div>
    )
}