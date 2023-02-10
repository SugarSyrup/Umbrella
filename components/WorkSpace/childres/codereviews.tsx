import axios from "axios";

interface Idata {
    title : string,

}

export default function codereviews() {
    return(<div className="container">
        
        <style jsx>{`
            div.container{
                background-color:white;
            }    
        `}</style>
    </div>)
}

//todo : typescript type 무사히 잘 먹이기
// export const getServerSideProps = async () => {
//     try{
//         const response = await axios.get('http://${window.location.host}/api/codereviews');

//         if(response.status === 201) {
//             const data = response.data
//             return{
//                 props:{data}
//             }
//         }
//     } 
//     catch {
//         console.log("ServerSide Error when running axios");
//         return{
//             props:{}
//         }
//     }
// }
