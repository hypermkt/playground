import { createStore } from 'redux'
// default exportされたものをtodoAppとして使用する
import todoApp from './reducers'
// exportされたもの全てをactionsとして使用する
import * as actions from './actions'

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            text: 'WEB+DB PRESSの原稿書く',
            completed: true
        },
        {
            text: '燃えるゴミを捨てる',
            completed: false
        }
    ]
}

const store = createStore(todoApp, initialState)
store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addTodo('電球を変える'))
store.dispatch(actions.addTodo('ご飯を買う'))
// store.dispatch(completeTodo(2))
// store.dispatch(setVisibility('SHOW_COMPLETED'))

