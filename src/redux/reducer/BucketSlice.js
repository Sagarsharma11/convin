import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const initialState = []
export const BucketSlice = createSlice({
    name: 'bucket',
    initialState: {
        data: {},
        Status: STATUS.IDLE
    },
    reducers: {
        createBucket: (state, action) => {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { createBucket, setStatus } = BucketSlice.actions

export default BucketSlice.reducer

export function fetchBuckets() {
    return async function fetchBucketsThunk(dispatch, getState) {
        try {
            const prop = getState()
            dispatch(setStatus(STATUS.LOADING))
            axios('http://localhost:3000/Buckets')
                .then((res) => {
                    // console.log(`res => `, res.data)
                    dispatch(createBucket(res.data))
                    dispatch(setStatus(STATUS.IDLE))
                })
                .catch(console.log)


        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            console.log(error)
        }
    }
}