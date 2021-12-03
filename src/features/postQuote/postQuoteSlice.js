import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quote: '',
  tags: '',
};

export const postQuoteSlice = createSlice({
  name: 'postQuote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload.split(',');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuote, setTags } = postQuoteSlice.actions;

export default postQuoteSlice.reducer;
