import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user.js'
import { attachmentReducer } from './slices/attachment.js'
import { callhomeReducer } from './slices/callhome.js'
import { appointmentReducer } from './slices/appointment.js'


const store = configureStore({
    reducer: {
        user: userReducer,
        attachment: attachmentReducer,
        appointment: appointmentReducer,
        callhome: callhomeReducer
    }
})

export default store