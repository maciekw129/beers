import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import requests from '../../helpers/requests';
import Beer from '../../types/Beer';

interface stateTypes {
    page: number,
    beers: Beer[] | []
}

const initialState: stateTypes = {
    page: 1,
    beers: [],
}

export const changePage = createAsyncThunk('beers/getBeersByPage', async (page: number, thunkAPI) => {
    thunkAPI.dispatch(beersSlice.actions.setPage(page));
    const response = await requests.getBeersByPage(page);
    return response.data;
});

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changePage.fulfilled, (state, action) => {
            state.beers = action.payload
        })
    }
});

export default beersSlice.reducer;