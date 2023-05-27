import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchAttachment = createAsyncThunk('attachment/fetchAttachment', async (params, {rejectWithValue}) => {
    try {
      const  response  = await axios.post('/api/attachment', params)
        return response.data  
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }    
})

export const fetchSetAttachStatus = createAsyncThunk('attachment/fetchSetAttachStatus', async (params, {rejectWithValue}) => {
    try {
        const  response  = await axios.patch('/api/attachment', params)
          return response.data
      } catch (error) {
          if (!error.response) {
              throw error
          }
          return rejectWithValue(error.response.data)
      }    
})

/////////////////////////////////////////////////////

export const fetchAllAttachments = createAsyncThunk('attachment/fetchAllAttachments', async () => {
    const { data } = await axios.get('/api/attachment')
    return data
})

/////////////////////////////////////////////////////
const initialState = {
    items: [],
    data: null,
    status: 'loading',
    error: ''
}

const attachmentSlice = createSlice({
    name: 'attachment',
    initialState,
    reducers: {}, 
    extraReducers: {

        [fetchAllAttachments.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchAllAttachments.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.items = action.payload
        },
        [fetchAllAttachments.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})


export const attachmentReducer = attachmentSlice.reducer
