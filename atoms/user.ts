import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'user'
})

export interface UserState {
    isLoggedin: boolean;
    nickname: string;
    user_id: number;
    email: string;
}
const initialState: UserState = {
    isLoggedin: false,
    nickname: "",
    user_id: -1,
    email :"",
}
  

export const userAtom = atom<UserState>({
    key: 'useratom',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})