import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase';

const ChatHistory = (props) => {

  const db = firebase.firestore();
  const {currentUser} = props;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('users')
    .doc(currentUser?.Uid)
    .collection('messages')
    .onSnapshot((snap) => {
      let chats = [];
      snap.forEach(doc => {
         chats.push({
           ...doc.data(),
           id: doc.id
         }); 
      });
      setChats(chats);
    });

    return () => {
      unsubscribe();
    }
  },[])
  return (
    <div>
      {chats.map ((chat, index) => (
        <div key = {index}>
          {/*Chat History: Sender name, date, last message*/}
        </div>
      ))}
    </div>
  )
}

export default ChatHistory
