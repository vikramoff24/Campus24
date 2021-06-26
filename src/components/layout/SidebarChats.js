import React, { Component } from 'react'
import { Avatar } from '@material-ui/core';
import '../../static/style/layout/chat.css';
export default class SidebarChats extends Component {
  render() {
    return (
      <div className = "sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Person name</h2>
        <p>Last message</p>
      </div>
    </div>
    )
  }
}