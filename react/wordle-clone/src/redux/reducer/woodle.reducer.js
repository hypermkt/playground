const initialState = {
  words: []
}

export const wordle = (state = initialState, action)  => {
  switch(action.type) {
    case 'INPUT_WORD':
      return {
        ...state,
        words: state.words.concat(action.payload),
      }

    default:
      return state;
  }
}