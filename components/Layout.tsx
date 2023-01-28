import TopBar from "./TopBar";
import SideBar from "./SideBar";

export default function WorkSpaceLayOut({children}: React.PropsWithChildren<{}>) {
    return (<div className="container">
        <SideBar />
        <div>
            <TopBar />    
            <div>
                {children}
            </div>
        </div>
        <style jsx>{`
            .container{
                width:100vw;
                height:100vh;
                background-color:#F3F3F3;

                display:flex;
                flex-direction:row;
            }
        `}</style>
    </div>)
}