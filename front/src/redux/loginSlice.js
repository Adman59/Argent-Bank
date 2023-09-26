import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "Login",
    initialState: {
        firstName: "Toto",
        lastName: "Paf"
    },
    reducers: {
        changeFirstName: (state, action) => {
            state.firstName = action.payload
        },
        changeLastName: (state, action) => {
            state.lastName = action.payload
        },
    }
})