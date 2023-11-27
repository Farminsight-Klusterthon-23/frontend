import { createSlice } from "@reduxjs/toolkit"

export const produceSlice = createSlice({
  name: "produce",
  initialState: {
    singleProduceInfo: null,
    produceListings: [],
    loading: false,
    currentPage: 1,
    hasMore: true,
    hasFetchedInitial: false,
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
    addNewProduceListing: (state, action) => {
      let exists = state.produceListings.find(it => it?._id === action.payload._id)
      console.log(exists, "jkakds")
      if(!exists)
        state.produceListings = [action.payload, ...state.produceListings]
    },
    updateProduceListings: (state, action) => {
      state.hasFetchedInitial = true
      state.loading = false
      state.produceListings = action.payload
    },
    removeProduceLisitng: (state, action) => {
      state.produceListings = state.produceListings.filter(
        (it) => it._id !== action.payload
      )
    },
  },
})

export const {
  updateLoading,
  updateSingleProduceInfo,
  resetSingleProduceInfo,
  addNewProduceListing,
  updateProduceListings,
  removeProduceLisitng,
} = produceSlice.actions

export default produceSlice.reducer
