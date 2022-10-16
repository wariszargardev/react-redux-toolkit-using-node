const createSlice= require('@reduxjs/toolkit').createSlice;
const axios = require('axios')
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState= {
    loading: false,
    error: '',
    users: []
}

const fetchUsers = createAsyncThunk('user/fetchUsers',() => {
   return axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>data.data);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled,(state, action)=>{
            state.loading = false;
            state.users = action.payload
        })

        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message
        });
    }

});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
