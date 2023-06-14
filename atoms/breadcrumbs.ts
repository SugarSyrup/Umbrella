import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'breadcrumbs'
})

export interface BreadCrumbState {
  breadcrumbs: string[];
}
const initialState: BreadCrumbState = {
  breadcrumbs:["Home"],
}


export const breadcrumbsAtom = atom<BreadCrumbState>({
    key: 'breadcrumbsatom',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})