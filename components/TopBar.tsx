import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function TopBar() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    return(<>
        <div className="container">
            <div className="welcome">
                <span>Welcome back, SugarSyrup</span>
                <span>You received 5 Messages, Missed 3 alarms, have a good day</span>
            </div>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            <div>
                <img src="images/butterfly.jpg"></img>
                <span>SugarSyrup</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
        <style jsx>{`
            div.container{
                width:80vw;
                height:15vh;
                background-color:#FFFFFF;
                padding:30px 60px;

                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
            }
            div.welcome {
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:flex-start;
            }

            div.welcome span:nth-child(1) {
                font-size:42px;
                font-weight:bolder;
                margin-bottom:15px;
            }
            div.welcome span:nth-child(2) {
                color:grey;
            }
        `}</style>
    </>)
}