import type { NextApiRequest, NextApiResponse } from 'next';
import { id, UserData, UserDB } from './data';

export default function handler (req: NextApiRequest, res: NextApiResponse)  {
    if(req.method === 'POST'){
        const {email, password, nick_name, name, birth, gender} = req.body;
        
        UserDB.push({
            id,email,password,nick_name,name,birth,gender
        })
        return res.status(200).send({
            message: 'success'
        });
    }

    res.status(405).send({message : 'wrong connect'});
}
