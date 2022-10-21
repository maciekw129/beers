import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';
import Beer from '../../types/Beer';

interface stateTypes {
    text: string,
    beers: Beer[]
}

const initialState: stateTypes = {
    text: '',
    beers: [],
}

export const fetchBeers = createAsyncThunk('search/fetchBeers', async(text: string, { dispatch }) => {
    if(text) {
        const response = await requests.getBeersByName(text);
        return response.data;
    } else {
        dispatch(searchSlice.actions.clearState);
    }   
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearState: (state) => {
            state.text = '';
            state.beers = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBeers.fulfilled, (state, action) => {
            state.beers = action.payload
        })
    }
});

export default searchSlice.reducer;
export const { setText, clearState } = searchSlice.actions;