import type { NextApiRequest, NextApiResponse } from 'next';
import { id, UserData, UserDB } from './data';

export default function handler (req: NextApiRequest, res: NextApiResponse)  {
    if(req.method === 'POST'){
        const {email, password, nick_name, name, age, gender} = req.body;
        UserDB.push({
            id,email,password,nick_name,name,age,gender
        })
        return res.status(200);
    }

    res.status(405);
}
