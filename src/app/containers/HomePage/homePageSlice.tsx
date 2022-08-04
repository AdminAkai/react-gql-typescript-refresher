import { createSlice } from '@reduxjs/toolkit'

import { IState } from './types'

const initialState: IState = {
  animePage: null,
}

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setAnimePage: (state, action) => {
      state.animePage = action.payload
    }
  }
})

export const { setAnimePage } = HomePageSlice.actions 

export default HomePageSlice.reducer