import React from 'react';
import logo from './logo.svg';
import Main from './sections/Main';
import LeftSidebar from './sections/LeftSidebar';
import RightSidebar from './sections/RightSidebar';
import './App.css';
import './norm.css'

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
