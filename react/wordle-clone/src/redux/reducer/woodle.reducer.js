const initialState = {
  targetWord: ['H', 'Y', 'P', 'E', 'R'],
  currentRow: 0,
  rowValidatable: [
    false,
    false,
    false,
    false,
    false
  ], 
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

    case 'GO_NEXT_ROW':
      return {
        ...state,
        currentRow: state.currentRow + 1
      }

    case 'CHANGE_ROW_VALIDATABLE':
      let rowValidatable = state.rowValidatable
      rowValidatable[state.currentRow] = true
      return {
        ...state,
        rowValidatable: rowValidatable
      }

    default:
      return state;
  }
}