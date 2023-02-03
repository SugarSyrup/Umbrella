export default function SideBar() {
    return(<>
        <div className="container">
            <span>@Your Community</span>
            <ul>
                <li>Code Reivews</li>
            </ul>
        </div>
        <style jsx>{`
            .container{
                width:20vw;
                height:100vh;
                background-color:#202123;
            }
        `}</style>
    </>)
}