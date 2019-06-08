import React from 'react';
import PropTypes from 'prop-types';

export class RenderProp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: 'render prop value.'}
  }

  render() {
    return (
      <div>
        <div>RenderProp Header.</div>
        <div>
          {this.props.children(this.state.text)}
          {/* {this.props.render(this.state.text)} */}
        </div>
      </div>
    )
  }
}

RenderProp.propTypes = {
  // render: PropTypes.func.isRequired
  children: PropTypes.func.isRequired
};