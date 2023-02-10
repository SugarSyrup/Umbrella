import WorkSpaceLayOut from '@/components/WorkSpace/Layout';
import { ThemeProvider } from 'styled-components';
import Home from '@/components/WorkSpace/childres/home';

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

export default function WorkSpace() {
    return(<ThemeProvider theme={mainTheme}>
        {/* todo : ?? 타입 잘못된듯?? 근데 왜 작동하지...? */}
        <WorkSpaceLayOut>
            <div className="container">
                <div className="notifications">

                </div>
            </div>
        </WorkSpaceLayOut>
        <style jsx>{`
            div.container{
                height:85vh;
                position:relative;
            }    

            div.container div.notifications{
                width:40%;
                height:80%;
                background-color:red;
                margin-left:30px;
                margin-top:20px;
            }
        `}</style>
    </ThemeProvider>)
}

//todo : notion으로 옮기기
//workspace에서 동작방식.

// 처음에는 home을 rendering 한다. or 다른 공지 페이지 렌더링 하던가...?
// 렌더링된 웹페이지에서 링크를 클릭한다
// 페이지가 이동된다? 

// 2.Link를 사용한다
// Link를 통해 페이지를 더 세세하게 라우팅하고 처리한다
// 아 이게 좋겠다.. serversiderendering도 좀 이용해 볼겸 ㅇㅋ

