import React,{Component} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
class App extends Component {
  render() {
      return (
      <div className = "App">
        <Navbar/>
        <div className="container"><Users/></div>
      </div>
  );
  }
}

export default App;
// const loading = false;
// const name= 'yajas';
//     return (
//     <div className = "App">
//       {loading?<h4>loading</h4>:<h1>Hello {name}</h1>}
//     </div>
