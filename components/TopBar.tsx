import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function TopBar() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    return(<>
        <div className="container">
            <div className="welcome">
                <span>Welcome back, Friends</span>
                <span>You received nth Messages, have a good day</span>
            </div>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </div>
        <style jsx>{`
            div.container{
                width:80vw;
                height:15vh;
                background-color:#FFFFFF;
            }
        `}</style>
    </>)
}