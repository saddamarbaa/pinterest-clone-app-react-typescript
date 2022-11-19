import React, { Component } from 'react'

type Props = {
 render: (is:boolean) => string
}

type State = {}

export default class User extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>{ this.props.render(true)}</div>
    )
  }
}