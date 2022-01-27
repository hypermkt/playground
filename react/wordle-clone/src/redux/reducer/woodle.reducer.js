const initialState = {
  words: []
}

export const wordle = (state = initialState, action)  => {
  switch(action.type) {
    case 'INPUT_WORD':
      const newWords = (state.words.length <= 4) ? state.words.concat(action.payload) : state.words;
      return {
        ...state,
        words: newWords,
      }
    case 'DELETE_WORD':
      let deletedWords = state.words.slice(0, state.words.length - 1)
      return {
        ...state,
        words: deletedWords
      }

    default:
      return state;
  }
}