import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: false
}



// ===== general slide ===== //

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isSidebarOpen = true
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false
        }
    },

})


export const { openSidebar, closeSidebar } = generalSlice.actions


export default generalSlice.reducer