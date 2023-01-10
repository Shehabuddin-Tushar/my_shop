import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    items: [],
    status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/product/products"
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },

    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status="pending"
        },
        
        [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status="success"
        },
        [productsFetch.rejected]: (state, action) => {
         
            state.status = "rejected"
        }
    }
})

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions

export default productsSlice.reducer