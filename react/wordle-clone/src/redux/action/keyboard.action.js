export const inputWord = value => ({
  type : 'INPUT_WORD',
  payload: value,
})

export const deleteWord = value => ({
  type : 'DELETE_WORD',
})

export const goNextRow = value => ({
  type : 'GO_NEXT_ROW',
})

export const changeRowValidatable = value => ({
  type : 'CHANGE_ROW_VALIDATABLE',
})