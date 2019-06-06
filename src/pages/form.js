import React from "react";

export class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onHandleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    alert(`提交的名字 ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label>
          姓名:
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.onHandleChange(e)}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
