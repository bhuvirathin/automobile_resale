import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  formData: formData[] | []
}
const initialState: InitialState = {formData:[]}

// // Define a type for the slice state
export interface formData {
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
const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<formData[]>) => {
        state.formData = [...action.payload]
          }
  },
})
export default formReducer.reducer
export const { addData } = formReducer.actions
