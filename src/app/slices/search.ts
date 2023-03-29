import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../helpers/requests';
import Beer from '../../types/Beer';

interface stateTypes {
    text: string,
    beers: Beer[],
    isLoading: boolean,
    errorMessage: string
}

const initialState: stateTypes = {
    text: '',
    beers: [],
    isLoading: false,
    errorMessage: ''
    
}

export const fetchBeers = createAsyncThunk('search/fetchBeers', async(text: string) => {
    const response = await requests.getBeersByName(text);
    return response.data; 
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearState: (state) => {
            state.beers = [];
            state.text = '';
            state.errorMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBeers.pending, (state) => {
            state.isLoading = true;
            state.errorMessage = '';
        })
        builder.addCase(fetchBeers.fulfilled, (state, action) => {
            const result = action.payload;
            if(!result.length) {
                state.errorMessage = `We haven't found any beer`;
            }
            state.beers = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchBeers.rejected, (state) => {
            state.isLoading = false;
            state.errorMessage = 'Something went wrong. Check your internet connection.'
        })
    }
});

export default searchSlice.reducer;
export const { setText, clearState } = searchSlice.actions;