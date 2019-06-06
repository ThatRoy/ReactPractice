import React from 'react'

export class Nothing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return null
  }

  componentWillMount() {
    console.log('componentWillMount ')
  }

  componentDidMount() {
    console.log('componentDidMount ')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps ')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate ')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate ')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ')
  }
}
