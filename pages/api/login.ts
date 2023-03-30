import type { NextApiRequest, NextApiResponse } from 'next';

type LoginResponseDataType = {
    accessToken : string,
    nickname : string
}

type UserData = {
    id:number,
    email: string,
    password: string,
    nickname: string,
}

const UserDB:UserData[] = [
    {
        id:1,
        email:"admin@naver.com",
        password:"1q2w3e4r!",
        nickname: "admin",
    },
    {
        id:2,
        email:"tlfvm04@naver.com",
        password:"1q2w3e4r!",
        nickname: "tlfvm",
    },
]

export default function handler (req: NextApiRequest, res: NextApiResponse)  {
    if(req.method === 'POST'){
        const {email, password} = req.body;

        UserDB.find((user) => {
            console.log(email, password);
            if(user.email === email){
                console.log(email, password);
                if(user.password === password){
                    return res.status(200).json({ 
                        accessToken : "1q2w3e4r!",
                        nickname : "asdf"
                    });
                }
                return res.status(401).send({
                    error : 'worng password',
                })
            }
        })

        return res.status(401).send({
            error : 'no email'
        });
    }

    res.status(405);
}
