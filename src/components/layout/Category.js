import React from 'react';
import firebase from "../../firebase/firebase";
import '../../static/style/layout/Category.css';
import CategoryItem from './CategoryItem';

class Message extends React.Component {
  
  state = { uinfo: [] };

  async componentWillMount()
  {
      let user = await firebase.database().ref("users");
      await user.on("value", datasnap=>{
        console.log("users : "+ datasnap.val())
        let uname =datasnap.val();
        console.log(uname)
        
        let key = Object.keys(uname);
        let entriesUsers = Object.values(uname)
        firebase
        .database()
        .ref("users")
        .on("value", (snapshot) => {
          const userList = snapshot.val();
          if (userList) {
            const uArr = [];

            Object.keys(userList).forEach((key) => {
              uArr.push(userList[key]);
              console.log(typeof userList[key]);
            });
            
            this.setState({ uinfo: [...uArr] });
          } else {
            this.setState({ uinfo: [] });
          }
      });
    });
  }
  sortUser = (category) => {
    console.log("category", typeof category, category)
    let sortedList=this.state.uinfo;
    if(category === "firstname"){
      this.state.uinfo.sort((a,b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0))
      console.log(sortedList)    
    }
    else if(category === "lastname"){
      console.log("hello")
      this.state.uinfo.sort((a,b) => (a.lastname > b.lastname) ? 1 : ((b.lastname > a.lastname) ? -1 : 0))
      console.log(sortedList)    
    }
    else if(category === "username"){
      this.state.uinfo.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
      console.log(sortedList)    
    }
    else if(category === "institute"){
      this.state.uinfo.sort((a,b) => (a.institute > b.institute) ? 1 : ((b.institute > a.institute) ? -1 : 0))
      console.log(sortedList)    
    }
    this.setState({ uinfo: [...sortedList] });
  }
  render() {
    return( 
    <div className="mb-5 p-2"><br />
      <button className = "category" onClick={(event) => this.sortUser("firstname")} >First Name </button>
      <button className = "category" onClick={(event) => this.sortUser("lastname")}>Last Name </button>
      <button className = "category" onClick={(event) => this.sortUser("username")}>User Name </button>
      <button className = "category" onClick={(event) => this.sortUser("institute")}>Institute </button>
      <ul id='friend-list'>
      {this.state.uinfo.map((item, index) => (
        <CategoryItem key = {index} user = {item}/>
      ))}
    </ul>
   </div>
    );
  }
}
export default Message;
