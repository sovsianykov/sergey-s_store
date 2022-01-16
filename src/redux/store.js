import {combineReducers, configureStore} from "@reduxjs/toolkit";
import products from './ducks'

const rootReducer = combineReducers({
    products
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}