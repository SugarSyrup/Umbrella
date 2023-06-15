import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'chattings'
})

export interface ChattingState {
  title: string;
  id: string;
}
const initialState: ChattingState[] = [
]


export const chattingAtom = atom<ChattingState[]>({
    key: 'chattingatom',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})