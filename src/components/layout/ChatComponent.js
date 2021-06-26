import React from 'react'
import { useGlobalContext } from '../../context';
import CategoryWindow from './CategoryWindow';
import ChatWindow from './ChatWindow';
const ChatComponent = (props) => {
  const {currentUser} = props
  const {chat_user} = useGlobalContext();

  return(
    <>
    {!chat_user?
      <CategoryWindow/>
    : <ChatWindow currentUser = {currentUser}/>
    }
    </>
  );
}


export default ChatComponent
