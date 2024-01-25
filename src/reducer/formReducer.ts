import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'


// // Define a type for the slice state
interface formData {
  model: string,
  location:string,
  year:string,
  owners:number,
  kms:number,
  fitments:string,
  validDate:string,
  color:string,
  photo?:string,
  transmission:string
}

// // Define the initial state using that type
const initialState: formData[] =[]

export const formReducer = createSlice({
  name: 'form',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<formData>) => {
        state.push(action.payload)
    }
  },
})


// // Other code such as selectors can use the imported `RootState` type
// export const selectData = (state: RootState) => state

export default formReducer.reducer