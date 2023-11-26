import { createSlice } from "@reduxjs/toolkit"

export const messagingEvents = {
  new: "new",
  getOne: "getOne",
  getMany: "getMany",
  deleteMany: "deleteOne",
  question: "question",
}
export const messagingSlice = createSlice({
  name: "messaging",
  initialState: {
    conversations: [],
    activeConversation: null,
    questionAsked: "",
    answerGiven: "",
    loading: false,
  },
  reducers: {
    new: (state, action) => {
      console.log(action.payload)
    },
    getOne: (state, action) => {
      console.log(action.payload)
    },
    getMany: (state, action) => {
      console.log(action.payload)
    },
    deleteOne: (state, action) => {
      console.log(action.payload)
    },
    question: (state, action) => {
      state.answerGiven = action.payload.answer
      state.loading = false
    },
    updateQuestionAsked: (state, action) => {
      state.questionAsked = action.payload
    },
    updateLoading: (state, action) => {
      state.loading = Boolean(action.payload)
    },
    resetQuestionAndAnswer: (state) => {
      state.questionAsked = ""
      state.answerGiven = ""
    }
  },
})

export const messagingActions = messagingSlice.actions

export default messagingSlice.reducer
