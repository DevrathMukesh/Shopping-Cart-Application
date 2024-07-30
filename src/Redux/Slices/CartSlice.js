import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [], // Example state
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove } = CartSlice.actions

export default CartSlice.reducer
