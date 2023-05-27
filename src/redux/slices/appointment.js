import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchAppointment = createAsyncThunk('appointment/fetchAppointment', async (params, {rejectWithValue}) => {
    try {
      const  response  = await axios.post('/api/appointment', params)
        return response.data  
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }    
})

export const fetchSetAppointStatus = createAsyncThunk('appointment/fetchSetAppointStatus', async (params, {rejectWithValue}) => {
    try {
        const  response  = await axios.patch('/api/appointment', params)
          return response.data
      } catch (error) {
          if (!error.response) {
              throw error
          }
          return rejectWithValue(error.response.data)
      }    
})

/////////////////////////////////////////////////////

export const fetchAllAppointments = createAsyncThunk('appointment/fetchAllAppointments', async () => {
    const { data } = await axios.get('/api/appointment')
    return data
})

/////////////////////////////////////////////////////
const initialState = {
    items: [],
    data: null,
    status: 'loading',
    error: ''
}

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {}, 
    extraReducers: {

        [fetchAllAppointments.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchAllAppointments.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.items = action.payload
        },
        [fetchAllAppointments.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})


export const appointmentReducer = appointmentSlice.reducer
