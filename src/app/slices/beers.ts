import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';
import Beer from '../../types/Beer';
import Params from '../../types/Params';

interface stateTypes {
    beers: Beer[],
    isNextPage: boolean,
    pageParams: Params
}

const initialState: stateTypes = {
    beers: [],
    isNextPage: true,
    pageParams: {
        page: 1,
        name: ''
    }
}

export const changePage  = createAsyncThunk('beers/getBeersByPage', async ( params: Params, { dispatch }) => {
    const isNextPage = await requests.getBeersByPage({...params, page: params.page + 1});
    dispatch(beersSlice.actions.setIsNextPage(!!isNextPage.data[0]));
    const response = await requests.getBeersByPage(params);
    return response.data;
});

const beersSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        setParams: (state, action) => {
            console.log('sdsd')
            state.pageParams.page = action.payload.page;
            state.pageParams.name = action.payload.name;
        },
        setIsNextPage: (state, action) => {
            state.isNextPage = action.payload;
        },
        clearBeers: (state) => {
            state.beers = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changePage.fulfilled, (state, action) => {
            state.beers = action.payload;
        })
    }
});

export const { setParams, clearBeers } = beersSlice.actions;
export default beersSlice.reducer;