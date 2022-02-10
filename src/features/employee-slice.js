import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './actionCreator';

const initialState = {
    users: [],
    authorization: false,
    registration: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) =>  {
            state.users = action.payload;
        }
    }
});

export const { registrationRoute, authorizationRoute } = userSlice.actions;
export default userSlice.reducer;