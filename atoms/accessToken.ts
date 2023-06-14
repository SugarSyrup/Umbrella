import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'accesstoken'
})

export interface UserState {
    accesstoken: string;
}
const initialState: UserState = {
    accesstoken: '',
}
  
export const accessTokenAtom = atom<UserState>({
    key: 'accesstoken',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})