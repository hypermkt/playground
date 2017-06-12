// Action Creators
export function addTodo(text) {
    return { type: 'ADD_TODO', text }
}

export function completeTodo(id) {
    return { type: 'COMPLETE_TODO', id }
}

export function setVisibility(filter) {
    return { type: 'SET_VISIBILITY_FITER', filter }
}