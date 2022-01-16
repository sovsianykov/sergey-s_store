
import httpService  from "../services/httpService"

import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async function (_, rejectWithValue) {
        try {
            const response = await httpService.get();
            return  response.data
        } catch (e) {
             return rejectWithValue(e.message)
        }
     }
)