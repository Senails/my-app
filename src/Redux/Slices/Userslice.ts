import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'



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

//let bbb = createAsyncThunk()


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
  },
  extraReducers:{
    
  }
})

export const {cleanmessage, setmessage,startload,endload} = UserSlice.actions
export default UserSlice.reducer