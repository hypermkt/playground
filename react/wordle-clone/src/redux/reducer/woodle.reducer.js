const initialState = {
  currentRow: 0,
  words: [
    [],
    [],
    [],
    [],
    [],
  ]
}

export const wordle = (state = initialState, action)  => {
  switch(action.type) {
    case 'INPUT_WORD':
      let newWords = state.words;
      newWords[state.currentRow] = (newWords[state.currentRow].length <= 4) ? newWords[state.currentRow].concat(action.payload) : state.words[state.currentRow];
      return {
        ...state,
        words: newWords,
      }
    case 'DELETE_WORD':
      let deletedWords = state.words;
      deletedWords[state.currentRow] = deletedWords[state.currentRow].slice(0, state.words[state.currentRow].length - 1)
      return {
        ...state,
        words: deletedWords
      }

    default:
      return state;
  }
}