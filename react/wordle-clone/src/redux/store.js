import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { wordle } from './reducer/woodle.reducer'

export const store = createStore(wordle, applyMiddleware(logger))