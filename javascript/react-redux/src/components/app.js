import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.fuga}</span><br />
        <button onClick={ () => this.props.handleClick() }>*増加*</button>
      </div>
    )
  }
}
