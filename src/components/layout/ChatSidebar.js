import React, { Component } from 'react'
import '../../static/style/layout/chat.css';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChats from './SidebarChats';
export default class ChatSidebar extends Component {
  render() {
    return (
      <div className = "sidebar">
      {/* <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
          <ChatIcon color = "#fff"/>
          </IconButton>
        </div>
      </div> */}
      <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined className = "sidebar__search-icon"/>
            <input className = "sidebar__searchInput" type = "text" placeholder = "Search"/>
          </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChats/>
        <SidebarChats/>
      </div>
    </div>
    )
  }
}
