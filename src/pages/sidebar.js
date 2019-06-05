import React from 'react'
import './sidebar.scss';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        const menus = props.menus
        // this.onHandleClick = this.onHandleClick.bind(this)
        this.menusItems = menus.map((item, index) => {
            // return <div 
            //             key={item}
            //             className='sidebar-item-container' 
            //             onClick={this.onHandleClick.bind(this, item)}>{item}</div>
            return <div 
                        key={item}
                        className='sidebar-item-container' 
                        onClick={() => this.props.onHandleClick(item)}>{item}</div>
        })
    }

    render() {
        return (
            <div className='sidebar-container'>
                {this.menusItems}
            </div>
        )
    }
}