import { createSlice } from "@reduxjs/toolkit"

export const produceSlice = createSlice({
  name: "produce",
  initialState: {
    singleProduceInfo: null,
    produceListings: [],
    loading: false,
  },
  reducers: {
    updateSingleProduceInfo: (state, action) => {
      state.singleProduceInfo = action.payload
    },
    resetSingleProduceInfo: (state) => {
      state.singleProduceInfo = null
    },
    updateLoading: (state, action) => {
      state.loading = Boolean(action.payload)
    },
    addNewProduceListings: (state, action) => {
      console.log("here", action.payload)
      state.produceListings = [action.payload, ...state.produceListings]
    },
  },
})

export const {
  updateLoading,
  updateSingleProduceInfo,
  resetSingleProduceInfo,
  addNewProduceListings,
} = produceSlice.actions

export default produceSlice.reducer
