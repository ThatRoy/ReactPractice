import React from 'react';

export class SelectPanel extends React.Component {
    constructor(props) {
        super(props)
        const options = props.options
        // 私有成员变量
        this.optionItem = options.map((item) => 
            <option key={item} value={item}>{item}</option>
        )
    }

    render() {
        return (
            <select onChange={this.props.onSelectChange}>
                {this.optionItem}
            </select>
        )
    }
}