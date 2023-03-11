import { configureStore } from '@reduxjs/toolkit'
import bucketReducer from '../reducer/BucketSlice'
import cardData from '../reducer/cardData'
export default configureStore({
  reducer: {
    bucket:bucketReducer,
    cardData:cardData
  },
})