import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const BucketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        createBucket: (state, action) => {
            state.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { createBucket} = BucketSlice.actions

export default BucketSlice.reducer