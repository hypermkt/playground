'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
    var todos = _ref.todos;
    return _react2.default.createElement(
        'ul',
        null,
        todos.map(function (todo) {
            return _react2.default.createElement(
                'li',
                null,
                todo.text
            );
        })
    );
};

TodoList.propTypes = {
    todos: _react.PropTypes.array.isRequired
};

exports.default = TodoList;