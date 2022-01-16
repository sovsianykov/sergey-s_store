import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productsSlice from './ducks'

const rootReducer = combineReducers({
    productsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}