import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchCallhome = createAsyncThunk('callhome/fetchCallhome', async (params, {rejectWithValue}) => {
    try {
      const  response  = await axios.post('/api/callhome', params)
        return response.data  
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }    
})

/////////////////////////////////////////////////////

export const fetchAllCalls = createAsyncThunk('callhome/fetchAllCalls', async () => {
    const { data } = await axios.get('/api/callhome')
    return data
})

/////////////////////////////////////////////////////
const initialState = {
    items: [],
    data: null,
    status: 'loading',
    error: ''
}

const callhomeSlice = createSlice({
    name: 'callhome',
    initialState,
    reducers: {}, 
    extraReducers: {
        [fetchAllCalls.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchAllCalls.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.items = action.payload
        },
        [fetchAllCalls.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})


export const callhomeReducer = callhomeSlice.reducer
