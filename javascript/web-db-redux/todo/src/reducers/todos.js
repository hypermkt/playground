function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { text: action.text, completed: false }
            ]
            break
        case 'COMPLETE_TODO':
            return state
        default:
            return state
    }
}

export default todos
