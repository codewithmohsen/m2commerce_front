import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

interface UserState {
  loading: boolean;
  users: Array<any>;
  error: string;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
    try {
       const response=await axios.get("https://jsonplaceholder.typicode.com/users");
          return response.data;
    } catch (error) {
        throw error;
    }
  
})

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchUsers.pending,state =>{
            state.loading=true
        })
        builder.addCase(
          fetchUsers.fulfilled,
          (state, action: PayloadAction<Array<any>>) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
          }
        );
        builder.addCase(
          fetchUsers.rejected,
          (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.users = [];
              state.error = action.payload
                //   error.message;
          }
        );

    }
})


export default userSlice.reducer