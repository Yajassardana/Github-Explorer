import React,{Component,Fragment} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import User from './Components/Users/User.js';
import axios from 'axios'
import Search from './Components/Users/Search.js';
import Alert from './Components/Layout/Alert.js';
import About from './Components/pages/about.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class App extends Component {
  state={
    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null
  };
  async componentDidMount() {
    this.setState({loading:true});
     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    this.setState({users:res.data,loading:false});
  }
  //Search Github users by bringing in props from search.js
  searchUsers= async(text)=>{
    this.setState({loading:true});
     const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    this.setState({users:res.data.items,loading:false});
  }
  clearUsers=()=>{
    this.setState({users:[]});
  }
  getUser=async(username)=>{
    this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({user:res.data,loading:false});
    console.log(res.data);
  }
  getUserRepos=async(username)=>{
    this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sorts=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({repos:res.data,loading:false});
    console.log(res.data);
  }
  setAlert=(msg,type)=>{
    this.setState({alert:
      {msg:msg,
        type:type}
      });
    setTimeout(()=>this.setState({alert:null}),3000);
};
  render() {
    const{users,loading,alert,user,repos}=this.state;
      return (
        <Router>
          <div className = "App">
            <Navbar/>
            <div className="container">
              <Alert alert={alert}/>
            <Switch>
                <Route
               exact
               path='/'
               render={props => (
                 <Fragment>
                   <Search
                     searchUsers={this.searchUsers}
                     clearUsers={this.clearUsers}
                     filled={users.length>0?true:false}
                     setAlert={this.setAlert}/>
                   <Users loading={loading} users={users} />
                 </Fragment>
               )}
             />
          <Route exact path='/about' component={About} />
            <Route
           exact
           path='/user/:login'
           render={props=>(
             <Fragment>
               <User
                 {...props} user={user} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} loading={loading}
                 />
             </Fragment>
           )}
        />
      </Switch>
            </div>
          </div>
        </Router>
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
