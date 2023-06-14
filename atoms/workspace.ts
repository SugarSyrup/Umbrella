import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'user'
})

export interface WorkspaceState {
  id: string;
  title: string;
  data?: {
    id: string,
    title: string,
    boards:{
      board_id:string,
      title:string,
    }[],
    events:{
      event_id:string,
      title: string,
    }[]
  };
  current?:{
    title:string,
    id: string,
    type: "board" | "event" | "",
  };
}
const initialState: WorkspaceState = {
  id: "",
  title: "",
  data:{
    id:"",
    title:"",
    boards:[],
    events:[],
  },
  current:{
    title:"none",
    id:"",
    type: "",
  }
}


export const workspaceAtom = atom<WorkspaceState>({
    key: 'workspaceatom',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})