import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    return(<>
        <div className="container">
            <div className="welcome">
                {/* todo : 페이지 이동 에 따라 해당 span은 바뀔 예정 ex. codeReviews로 가면 그에 맞게 제목 변경 */}
                <span>Welcome back, SugarSyrup</span>
                {/* 만약 알림과 메세지를 주고 받는 다면, 그 알림을 입력 받는 칸 */}
                <span>You received 5 Messages, Missed 3 alarms, have a good day</span>
            </div>
            <div className="user">
                {/* todo : user정보 추가 예정 */}
                <img src="images/butterfly.jpg" className="thumbnail"></img>
                <span>SugarSyrup</span>
                <FontAwesomeIcon icon={faChevronDown}/>
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
                margin-left:10px;
            }

            div.welcome span:nth-child(1) {
                font-size:42px;
                font-weight:bolder;
                margin-bottom:15px;
            }
            div.welcome span:nth-child(2) {
                color:grey;
            }

            
            div.user {
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;

                margin-right:50px;
            }
            div.user img.thumbnail {
                border:1px solid black;
                border-radius: 50%;
                width:100px;
                height:100px;
                margin-right:30px;
            }
            div.user span{
                margin-right:20px;
            }
        `}</style>
    </>)
}