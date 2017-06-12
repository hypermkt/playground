import React, { PropTypes } from 'react'

const TodoList = ({ todos }) => (
    <ul>{todos.map(todo =>
        <li>{todo.text}</li>)}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList