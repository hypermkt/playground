const initialState = {
  // 現在の行番号 0〜4 
  currentRow: 0,
  words: [
    [],
    [],
    [],
    [],
    []
  ]
}

export const wordle = (state = initialState, action)  => {
  switch(action.type) {
    case 'INPUT_WORD':
      let words = state.words
      words[state.currentRow] = words[state.currentRow].concat(action.payload)

      return {
        ...state,
        words: words,
      }

    case 'DELETE_WORD':
      let delete_words = state.words
      delete_words[state.currentRow].splice(-1,1)
      return {
        ...state,
        words: delete_words
      }

    default:
      return state;
  }
}