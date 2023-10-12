import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addtodolist: (state) => {
            state.value +=1;
        },
        removetodolist: (state) => {
            state.value -=1;
        },
        clearall: (state) => {
            state.value -=1;
        }
    }
})


export const { addtodolist,  removetodolist, clearall} =  counterSlice.actions
export default counterSlice.reducer;