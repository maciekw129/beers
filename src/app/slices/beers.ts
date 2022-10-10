import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';
import Beer from '../../types/Beer';

interface stateTypes {
    page: number,
    beers: Beer[] | [],
    isNextPage: boolean
}

const initialState: stateTypes = {
    page: 1,
    beers: [],
    isNextPage: true
}

export const changePage = createAsyncThunk('beers/getBeersByPage', async (page: number, thunkAPI) => {
    thunkAPI.dispatch(beersSlice.actions.setPage(page));
    const isNextPage = await requests.getBeersByPage(page + 1);
    thunkAPI.dispatch(beersSlice.actions.setIsNextPage(!!isNextPage.data[0]));
    
    const response = await requests.getBeersByPage(page);
    return response.data;
});

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setIsNextPage: (state, action) => {
            state.isNextPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changePage.fulfilled, (state, action) => {
            state.beers = action.payload
        })
    }
});

export default beersSlice.reducer;