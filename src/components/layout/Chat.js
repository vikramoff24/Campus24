import React, { useEffect, useState } from 'react'
import '../../static/style/layout/chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Send, MoreVert, Add} from '@material-ui/icons';
import { useGlobalContext } from '../../context';
import firebase from '../../firebase/firebase';

function Chat({user}){

  const {setChatUser} = useGlobalContext();

  const db = firebase.firestore(); 
  const {chat_user} = useGlobalContext();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const sendMessage = async(e) => {
    e.preventDefault();
    db.collection('users')
    .doc(user?.Uid)
    .collection('messages')
    .doc(chat_user?.Uid)
    .collection('chats')
    .add({
      message: input,
      timestamp: new Date().toISOString().slice(0, 22),
      sender: user.username
    });
    db.collection('users')
    .doc(chat_user?.Uid)
    .collection('messages')
    .doc(user?.Uid)
    .collection('chats')
    .add({
      message: input,
      timestamp: new Date().toISOString().slice(0, 22),
      sender: user.username
    });
    // setMessages([...messages, input]);
    setInput('');
    // console.log(timestamp);
  }
  useEffect(() => {
    const unsubscribe = db.collection('users')
    .doc(user?.Uid)
    .collection('messages')
    .doc(chat_user?.Uid)
    .collection('chats')
    .orderBy('timestamp')
    .onSnapshot((snap) => {
      let msgs = [];
      snap.forEach(doc => {
         msgs.push({
           ...doc.data(),
           id: doc.id
         }); 
      });
      setMessages(msgs);
    });

    return () => {
      unsubscribe();
      setChatUser(null);
    }
  },[]);
  return (
    <div className = "chat">
    <div className="chat__header">
      <Avatar src = {chat_user.profilepic}/>
      <div className="chat__headerInfo">
        <h3>{chat_user.firstname} {chat_user.lastname}</h3>
        <p> @{chat_user.username}</p>
      </div>
      <div className="chat__headerRight">
        <IconButton className ="btn">
          <MoreVert/>
        </IconButton>
      </div>
    </div>
    <div className="chat__body">
      {messages.map((message, index) => (
        <p className = {`chat__message ${user.username === message.sender && "chat__receiver"}`} 
        key = {index}
        >
        {message.message}
        </p>
      ))}
    </div>
    <form className="chat__footer">
        <IconButton className = "btn">
          <Add fontSize = "large"/>
        </IconButton>
          <input className = "message__input" placeholder = "Type a message" type = "text" 
            value = {input} 
            onChange = {e => setInput(e.target.value)}
          />
        <IconButton className = "btn send-button" type = "submit" onClick = {sendMessage} disabled = {input === ''}>
          <Send fontSize = "large" className = "send-icon"/>
        </IconButton>
    </form>
  </div>
      
  )
}

export default Chat