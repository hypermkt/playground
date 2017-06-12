'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = require('./visibilityFilter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoApp = (0, _redux.combineReducers)({ todos: _todos2.default, visibilityFilter: _visibilityFilter2.default });

exports.default = todoApp;