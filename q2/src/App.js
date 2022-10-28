

import { createContext, useReducer, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';


export const UserContext = createContext()

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "UPDATE":
      return { ...state, nickName: action.data.username, bio: action.data.biob, avatar: action.data.avatar };
    default:
      return state;
  }
};

function App() {

  const [user, setUser] = useReducer(reducer, {
    userId: "Axole123",
    nickName: "",
    bio: " ",
    avatar:"sitebase"
  });

  const handleComplete = (type, currentData ,data) => {
    setUser({ type, data });
  };


  return (<UserContext.Provider value={{ user, handleComplete }}>
    <div className="App">
      <UserForm />
      <UserCard />
    </div></UserContext.Provider>
  );
}

export default App;
