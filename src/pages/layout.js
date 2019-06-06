import React from 'react';
import { Main } from './main'

export class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <aside>

        </aside>
        <Main></Main>
      </div>
    )
  }
}