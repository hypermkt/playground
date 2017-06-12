import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import * as actions from './actions'
import App from './components/App'

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

render (
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('containers')
)
