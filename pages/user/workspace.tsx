import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { CurUserState } from '@/store/CurUserSlice';

export default function ABC()  {   
    const users = useSelector<RootState, CurUserState>(state => state.user);
    return(<>
        <span>{users.name}</span>    
    </>)
}