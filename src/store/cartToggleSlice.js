import {createSlice} from '@reduxjs/toolkit'

const initialToggleState = {showCart : true}
const cartToggleSlice = createSlice({
    name : 'cartToggle',
    initialState : initialToggleState,
    reducers : {
        manageCart(state) {
            state.showCart = !state.showCart;
        }
    }

});

export const toggleActions = cartToggleSlice.actions;

export default cartToggleSlice.reducer;