import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "shohan",
        email: "shohan@gmail.com",
        photo: "defult.png"

    },
    reducers: {
        chnageName: (state, action) => {
            state.name = action.payload.name;
        },
        chnageEmail: (state, action) => {
            state.email = action.payload.email;
        },
        chnagePhoto: (state, action) => { 
            state.photo = action.payload.photo;
        }
    }
});

export const { chnageName, chnageEmail, chnagePhoto } = userSlice.actions;
export default userSlice.reducer;