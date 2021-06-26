import React from 'react'
import Chat from './Chat'
import ChatSidebar from './ChatSidebar'
import '../../static/style/layout/chat.css';
import LayoutRegistered from '../HOC/LayoutRegistered';
function ChatWindow (props){
  const { currentUser, redirectPage } = props
    return (
      <LayoutRegistered>
      <div className = "chat__window">
          <Chat user = {currentUser}/>
      </div>
      </LayoutRegistered>
    )

}
export default ChatWindow