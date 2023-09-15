import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import categoriesReducer from "./categories/categories.slice";
import productReducer from "./products/product.slice";
import cartReducer from "./cart/cart.slice";
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        products: productReducer,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware, ordersApi.middleware), 
});

setupListeners(store.dispatch);