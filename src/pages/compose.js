import React from 'react';


export class Compose extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <div>
          {this.props.header}
        </div>
        <div>------分割线</div>
        <div>
          {this.props.content}
        </div>
      </div>
    )
  }
}