'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
    var action = arguments[1];

    switch (action.type) {
        case 'SET_VISIBILITY_FITER':
            return action.filter;
            break;
        default:
            return state;
    }
}

exports.default = visibilityFilter;