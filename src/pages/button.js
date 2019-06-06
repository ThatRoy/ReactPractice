import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <div>当前的 theme 是 {this.context}</div>
    )
  }
}