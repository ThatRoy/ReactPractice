import React from "react";
import "./main.scss";
import { Toggle } from "./event";
import { Sidebar } from "./sidebar";
import { Nothing } from "./nothing";
import { SimpleForm } from "./form";
import { SelectPanel } from './select';
import { MainContent } from './mainContent';
import { Compose } from './compose';
import { Button } from './button';
import { ErrorBoundary } from './errorBoundary';
import { RenderProp } from './renderProp';

// 这是的作用仅仅是提供一个默认值
const ThemeContext = React.createContext('normal');
// 把 Context 对象 挂载在 class 上的 contextType ，让 Button 可以通过 this.context 访问到
// 但是这样，不是很难用？
Button.contextType = ThemeContext;

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ComponentNameList: ["default", "toggle", "nothing", "form", "select", "compose","button","RenderProp"],
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
      case "compose":
        target = <Compose header={<Toggle/>} content={<SimpleForm/>}/>
        break;
      case "button":
        target = <Button/>
        break;
      case "RenderProp":
        // 这里默认是自定义 render 的写法
        // target = <RenderProp render={data=> (
        //   <div>
        //     <h1>这里是Main的标题</h1>
        //     <h2>RenderProp 里的数据是： {data}</h2>
        //   </div>
        // )}/>
        // 这里默认是 children 的写法
        target = <RenderProp>
          {data=> (
            <div>
              <h1>这里是Main的标题</h1>
              <h2>RenderProp 里的数据是： {data}</h2>
            </div>
          )}
        </RenderProp>
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
        {/* 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
        Provider 接收一个 value 属性，传递给消费组件 */}
        <ThemeContext.Provider value="vscode dark">
          <ErrorBoundary>
            <MainContent>
              {target}
            </MainContent>
          </ErrorBoundary>
        </ThemeContext.Provider>
      </div>
    );
  }
}
