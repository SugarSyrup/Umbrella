import type { NextApiRequest, NextApiResponse } from 'next';
import { id, UserData, UserDB } from './data';

export default function handler (req: NextApiRequest, res: NextApiResponse)  {
    if(req.method === 'GET'){
        return res.status(200).send(
            ['likelion', 'GDSC']
        );
    }

    res.status(405).send({message : 'wrong connect'});
}
