import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo' 

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map((todo, i) => (
            <Todo todo={todo} idx={i} key={i.toString()} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodosList)
