import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./categories/categories.slice";
import productReducer from "./products/product.slice";
import cartReducer from "./cart/cart.slice";

export const store = configureStore({
    reducer:{
        
        categories: categoriesReducer,
        products: productReducer,
        cart: cartReducer,
        
    },
});