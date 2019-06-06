import React from "react";

export class SelectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "" };
    const options = props.options;
    // 私有成员变量
    this.optionItem = options.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  }

  onHandleChange(e) {
    // 同步的方式
    this.setState({selectValue: e.target.value})
    // 传递一个函数的形式，就是异步访问事件，会变成 null
    // this.setState(() => ({
    //   selectValue: e.target.value
    // }));
    //   this.props.onSelectChange(e)
  }

  render() {
    return (
      <div>
        <div>已选: {this.state.selectValue}</div>
        <select onChange={this.onHandleChange.bind(this)}>
          {this.optionItem}
        </select>
      </div>
    );
  }
}
