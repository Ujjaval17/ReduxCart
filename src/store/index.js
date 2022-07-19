import {configureStore} from '@reduxjs/toolkit';
import cartToggleSlice from './cartToggleSlice';
import cartUpdateSlice from './cartUpdateSlice';

const store = configureStore({
    reducer : {
        cartToggle : cartToggleSlice,
        cartUpdate : cartUpdateSlice,
    }
});

export default store;