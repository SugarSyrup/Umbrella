import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { selectUserState } from '@/store/userSlice';

export interface UserAuthTemplateProps { 
    children: React.ReactNode;
    // data? : InferGetServerSidePropsType<typeof getServerSideProps>
 }


//TODO : useEffect때문에 미묘한 시간차가 발생, 이 시간차로 WorkSpace가 살짝 보였다가 사라짐 
export function UserAuthTemplate({children} : UserAuthTemplateProps) {
    const router = useRouter();
    const {isLoggin} = useSelector(selectUserState);

    useEffect(() => {
        if(!isLoggin) {
            router.push({pathname:'/user/login'});
        }
    }, [])

    return (<>
        {children}
    </>)
}

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) =>
//       async ({ params }) => {
//         // we can set the initial state from here
//         // we are setting to false but you can run your custom logic here
//         //console.log("State on server", store.getState());
//         const data = useSelector(selectUserState);
//         console.log(data.isLoggin);
//         return {
//           props: {
//             data: data,
//           },
//         };
//       }
//   );