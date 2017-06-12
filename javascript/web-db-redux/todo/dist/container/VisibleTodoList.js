'use strict';

var _reactRedux = require('react-redux');

var _TodoList = require('../components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
            break;
        case 'SHOW_COMPLETED':
            return todos.filter(function (todo) {
                return todo.completed;
            });
            break;
        case 'SHOW_ACTIVE':
            return todos.filter(function (todo) {
                return !todo.completed;
            });
            break;
    }
}