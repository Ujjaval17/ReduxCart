import {createSlice} from '@reduxjs/toolkit';

const cartUpdateSlice = createSlice({
    name : 'cartUpdate',
    initialState : {items:[], tquantity: 0},
    reducers : {

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item=> item.id === newItem.id);
            state.tquantity++;
            if(!existingItem){
                state.items.push({
                    name : newItem.title,
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price

                });

            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state,action) {
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id === id);
            state.tquantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item=>item.id === !id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }


    }
});

export const cartUpdateActions = cartUpdateSlice.actions;

export default cartUpdateSlice.reducer;