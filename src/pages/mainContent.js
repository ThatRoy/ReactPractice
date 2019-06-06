import React from 'react';
import "./mainContent.scss";

export class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-content-container">
        {this.props.children}
      </div>
    )
  }
}