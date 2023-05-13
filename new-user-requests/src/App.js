import React from 'react';
import './App.css';
import Button from './components/Button';
// import Filters from './components/Filters';
import RequestsList from './components/RequestsList';

function App() {
  // const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <div className="app">
      {/* Replace this with your code ...*/}
      <img src='/pobl-logo.png' className="App-logo" alt="logo" />
      {/* <h2>New Starter Requests</h2>
      <p>Here is the blank project for you to start from for this technical test. <br/> See <a href="https://github.com/PoblGroup-Dev/Junior-Web-Dev-Practical" target="_blank" rel="noreferrer">readme</a> for information. Good Luck!</p> */}
      {/* ... */}
      {/* New User Request Form */}
      {/* New User Request List  */}
   
      <div className='d-flex flex-column'>

      <RequestsList/>
      <Button/>
      
      </div>
    </div>
  );
}

export default App;
