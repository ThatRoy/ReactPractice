import React from 'react';

// 演示 3 种绑定事件的方式
export class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: false}
        // 1.为了在 onHandleClick 中使用 `this`，这个绑定是必不可少的
        // this.onHandleClick = this.onHandleClick.bind(this)
    }

    onHandleClick(e) {
        e.preventDefault()
        // 对象
        // this.setState({
        //     isToggleOn: !this.state.isToggleOn
        // })
        // 箭头函数
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    // 2.此语法确保 `handleClick` 内的 `this` 已被绑定。
    // 注意: 这是 *实验性* 语法。
    onHandleClick2 = (e) => {
        e.preventDefault()
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        // bind 的另一种写法
        return (
            <button onClick={this.onHandleClick.bind(this)}>
                {this.state.isToggleOn?'on':'off'}
            </button>
        )
        // return (
        //     <button onClick={this.onHandleClick2}>
        //         {this.state.isToggleOn?'on':'off'}
        //     </button>
        // )
        // 3.此语法确保 `handleClick` 内的 `this` 已被绑定。
        // 缺点在于每次渲染的时候，都会创建一个不同的回调函数
        // return (
        //     <button onClick={(e) => this.onHandleClick(e)}>
        //         {this.state.isToggleOn?'on':'off'}
        //     </button>
        // )
    }
}