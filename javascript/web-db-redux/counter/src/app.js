import { createStore } from 'redux';

// Action Creators
function incrementCounter() {
    return { type: 'INCREMENT_COUNTER' }
}

function decrementCounter() {
    return { type: 'DECREMENT_COUNTER' }
}

// Reducer
function counter(state = { counter: 0}, action) {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return { counter: state.counter + 1 };
            break;
        case 'DECREMENT_COUNTER':
            return { counter: state.counter - 1 };
            break;
        default:
            return state;
    }
    // return state;
}

// Store
const store = createStore(counter);

// This will be called when the state is updated.
store.subscribe(() => console.log(store.getState()));

// Call updates like this
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
