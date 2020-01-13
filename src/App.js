import React, {useState} from 'react';
import logo from './logo.svg';
import Main from './sections/Main';
import LeftSidebar from './sections/LeftSidebar';
import RightSidebar from './sections/RightSidebar';
import './App.css';
// import './norm.css'

function App() {
  const [sold, setSold] = useState([]);
  const updateSold = value => {
    console.log(value)
      setSold(value);
  }
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSidebar newSale={updateSold}/>
    </div>
  );
}

export default App;
