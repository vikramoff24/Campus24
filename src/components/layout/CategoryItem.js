import React from 'react'
import { useGlobalContext } from '../../context';
import '../../static/style/layout/Category.css';
const CategoryItem = ({user}) => {

  const {setChatUser} = useGlobalContext();
  const handleClick = () => {
    setChatUser(user);
  } 
  return (
    <div class="users">
      <li class='friend'>
        <img src='https://i.imgur.com/rxBwsBB.jpg' />
        <div class='name'>
          {user.firstname}  {user.lastname}
        <div class = 'uname'>@ {user.username}</div>
        <div class = 'cname'>{user.institute}</div>
        </div>
        <div className = "chat-icon" onClick = {handleClick}></div>
      </li>
    </div>
  )
}

export default CategoryItem
