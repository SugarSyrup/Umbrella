import { atom } from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'workspaceatom'
})

export interface WorkspaceState {
  id: number;
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
    }[],
    userListInWorkspace:{
      userId: number,
      email:string,
      nickName:string,
      userRole:string,
    }[]
  };
//   current?:{
//     title?:string,
//     id: string,
//     type?: "board" | "event" | "",
//   };
}
const initialState: WorkspaceState = {
  id: -1,
  title: "",
  data:{
    id:"",
    title:"",
    boards:[],
    events:[],
    userListInWorkspace: [],
  },
//   current:{
//     title:"none",
//     id:"",
//     type: "",
//   }
}


export const workspaceAtom = atom<WorkspaceState>({
    key: 'workspaceatom',
    default: initialState,
    effects_UNSTABLE: [persistAtom],
})