import React,{Component} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import axios from 'axios'
import Search from './Components/Users/Search.js';
import Alert from './Components/Layout/Alert.js';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class App extends Component {
  state={
    users:[],
    loading:false,
    alert:null
  };
  async componentDidMount() {
    this.setState({loading:true});
     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    this.setState({users:res.data,loading:false});
     console.log(res.data);
  }
  //Search Github users by bringing in props from search.js
  searchUsers= async(text)=>{
    this.setState({loading:true});
     const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    this.setState({users:res.data.items,loading:false});
     console.log(res.data.items);
  }
  clearUsers=()=>{
    this.setState({users:[]});
  }
  setAlert=(msg,type)=>{
    this.setState({alert:
      {msg:msg,
        type:type}
      });
    setTimeout(()=>this.setState({alert:null}),3000);
};
  render() {
    const{users,loading,alert}=this.state;
      return (
      <div className = "App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert}/>
            <Search
              searchUsers={this.searchUsers}
               clearUsers={this.clearUsers}
                filled={users.length>0?true:false}
                setAlert={this.setAlert}/>
          <Users loading={loading} users={users}/>
        </div>
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
