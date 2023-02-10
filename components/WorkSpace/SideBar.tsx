import Link from 'next/link'

export default function SideBar() {
    return(<>
        <div className="container">
            <span>@Your Community</span>
            <ul>
                <li>
                    {/* todo : Link를 return 하는 컴포넌트 쪼개기 */}
                    <Link href="/workspace/codereviews">
                        Code Reivews
                    </Link>
                </li>
            </ul>
        </div>
        <style jsx>{`
            div.container{
                width:400px;
                height:100vh;

                background-color:#202123;

                display:flex;
                flex-direction:column;
                justify-content:flex-start;
                align-items:center;
            }

            div.container span{
                margin-top:100px;
                color:white;
                font-size:28px;
                font-weight:bolder;
            }

            div.container ul{
                margin-top:80px;
            }

            div.container ul li {
                margin-top:40px;
                font-size:24px;
                color:grey;
            }
            
            div.container ul li:hover{
                cursor:pointer;
                color:white;
                font-weight:700;
                transition:.3s;
            }
        `}</style>
    </>)
}