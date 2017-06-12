function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FITER':
            return action.filter
            break
        default:
            return state
    }
}

export default visibilityFilter