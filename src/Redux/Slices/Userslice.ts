import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { settoken } from '../../utils/memtoken';



interface UserState {
  loading:boolean;
  message:string;
  auth:boolean;
  token:string;
  nickname:string;
  email:string;
  monetbalance:number;
  cristalbalance:number;
}

const initialState: UserState = {
  loading:false,
  message:'',
  auth:false,
  token:'',
  nickname:'',
  email:'',
  monetbalance:0,
  cristalbalance:0,
}

export type loginprops = {
  token:string;
  nickname:string;
  email:string;
  monetbalance:number;
  cristalbalance:number;
}


const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cleanmessage(state){
      state.message = '';
    },
    setmessage(state,actions:PayloadAction<string>){
      state.message = actions.payload
    },
    startload(state){
      state.loading=true;
    },
    endload(state){
      state.loading=false;
    },
    setlogin(state,actions:PayloadAction<loginprops>){
      let payload = actions.payload;

      state.auth=true;

      state.email=payload.email;
      state.nickname=payload.nickname;
      state.token=payload.token;
      state.monetbalance=payload.monetbalance;
      state.cristalbalance=payload.cristalbalance;

      settoken(payload.token)
    },
    setbalance(state,actions:PayloadAction<{monetbalance:number;}>){
      state.monetbalance=actions.payload.monetbalance
    },
  },
  extraReducers:{
    
  }
})

export const {cleanmessage, setmessage,startload,endload, setlogin, setbalance} = UserSlice.actions
export default UserSlice.reducer