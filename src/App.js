//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);

  const onScreenUserhandler = (Uname, Uage) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { username: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <h2>Let's Get Started</h2>
      <AddUser onAdd={onScreenUserhandler} />
      <UserList Users={userList} />
    </div>
  );
}

export default App;
