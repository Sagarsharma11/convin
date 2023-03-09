import { configureStore } from '@reduxjs/toolkit'
import bucketReducer from '../reducer/BucketSlice'
export default configureStore({
  reducer: {
    bucket:bucketReducer
  },
})