import type { NextApiRequest, NextApiResponse } from 'next';
import { UserData, UserDB } from './data';
// type LoginResponseDataType = {
//     accessToken : string,
//     nickname : string
// }

export default function handler (req: NextApiRequest, res: NextApiResponse)  {
    if(req.method === 'POST'){
        const {email, password} = req.body;

        UserDB.find((user) => {
            if(user.email === email){
                if(user.password === password){
                    return res.status(200).json({ 
                        access_token : "1q2w3e4r!",
                        nick_name : "asdf"
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
