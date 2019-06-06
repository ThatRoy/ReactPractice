import React from "react";
import "./main.scss";
import { Toggle } from "./event";
import { Sidebar } from "./sidebar";
import { Nothing } from "./nothing";
import { SimpleForm } from "./form";
import { SelectPanel } from './select';
import { MainContent } from './mainContent';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ComponentNameList: ["default", "toggle", "nothing", "form", "select"],
      currentSelect: "default"
    };
    // this.onSelectChange = this.onSelectChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(value) {
    this.setState(() => ({
      currentSelect: value
    }));
  }

  // 在异步方法里访问事件，e.target 是 null
  // https://www.duncanleung.com/blog/2017-08-14-fixing-react-warnings-synthetic-events-in-setstate/
  onSelectChange(e) {
    // solution 1
    e.persist(); // 此方法会从池中移除合成事件，允许用户代码保留对事件的引用。
    this.setState(() => ({
      currentSelect: e.target.value
    }));

    // solution 2
    // let value = e.target.value;  // Cache the value of e.target.value
    // this.setState(() => ({
    //     currentSelect: value
    // }))
  }

  // <SelectPanel options={this.state.ComponentNameList} onSelectChange={this.onSelectChange}/>
  render() {
    let target;
    const type = this.state.currentSelect;
    switch (type) {
      case "toggle":
        target = <Toggle />;
        break;
      case "nothing":
        target = <Nothing />;
        break;
      case "form":
        target = <SimpleForm />;
        break;
      case "select":
        target = <SelectPanel options={this.state.ComponentNameList} />;
        break;
      default:
        target = <div>主界面</div>;
        break;
    }
    return (
      <div className="main-container">
        <Sidebar
          menus={this.state.ComponentNameList}
          onHandleClick={this.onHandleClick}
        />
        <MainContent>
          {target}
        </MainContent>
      </div>
    );
  }
}
