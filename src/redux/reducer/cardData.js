import { createSlice } from '@reduxjs/toolkit'

export const cardData = createSlice(
    {
        name: 'cardData',
        initialState: { value: '' },
        reducers: {
            showCart: (state, action) => {
                state.value = action.payload
                console.log(action.payload, state.value)
            }
        }
    }
)

export const { showCart } = cardData.actions
export default cardData.reducer