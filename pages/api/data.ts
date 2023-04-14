export let id = 3;

export type UserData = {
    id:number,
    email: string,
    password: string,
    nick_name: string,
    name:string,
    birth:string,
    gender:string
}

export const UserDB:UserData[] = [
    {
        id:1,
        email:"admin@naver.com",
        password:"1q2w3e4r!",
        nick_name: "admin",
        name:"rlacnsqo",
        birth:'12241212',
        gender:"female",
    },
    {
        id:2,
        email:"tlfvm04@naver.com",
        password:"1q2w3e4r!",
        nick_name: "tlfvm",
        name:"rlacnsqo",
        birth:'12241212',
        gender:"female",
    },
]
