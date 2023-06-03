import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { userReducerState } from 'store/userReducer';

export interface UserAuthTemplateProps { 
    children: React.ReactNode
 }


//TODO : useEffect때문에 미묘한 시간차가 발생, 이 시간차로 WorkSpace가 살짝 보였다가 사라짐 
export function UserAuthTemplate(props : UserAuthTemplateProps) {
    const router = useRouter();
    const {nick_name} = useSelector((state: userReducerState) => state.user);

    useEffect(() => {
        if(nick_name === "") 
            router.push({pathname:'login'});
            //TODO : 권한 없어서 로그인 창으로 튕길때, 알림 메세지가 로그인 창에서 떠야하나??
    }, [])

    if(nick_name === "") {
        return<>로그인 페이지로 이동합니다...</>
    }

    return (<>{props.children}</>)
}
