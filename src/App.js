import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import User from './Components/Users/User.js';
import axios from 'axios'
import Search from './Components/Users/Search.js';
import Alert from './Components/Layout/Alert.js';
import About from './Components/pages/about.js';
import {BrowserRouter as Router,HashRouter,Switch,Route} from 'react-router-dom';
const App=()=>{
  const [users,setUsers]     =useState([]);
  const [user,setUser]       =useState({});
  const [repos,setRepos]     =useState([]);
  const [loading,setLoading] =useState(false);
  const [alert,setalert]     =useState(null);


  //Search Github users by bringing in props from search.js
  useEffect(()=>{
    async function fetchData(){
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    setUsers(res.data);
    setLoading(false);
    }
  fetchData();
  },[]);
  const searchUsers= async(text)=>{
    setLoading(true);
     const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`);
    setUsers(res.data.items);
        setLoading(false);
  }
  const clearUsers=()=>{
    setUsers([]);
  }
  const getUser=async(username)=>{
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
    //console.log(res.data);
  }
  const getUserRepos=async(username)=>{
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sorts=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
    //console.log(res.data);
  }
  const setAlert=(msg,type)=>{
      setalert({msg:msg,
        type:type});
    setTimeout(()=>setalert(null),3000);
};

      return (
        <HashRouter basename="/GithubFinder/">
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
                     searchUsers={searchUsers}
                     clearUsers={clearUsers}
                     filled={users.length>0?true:false}
                     setAlert={setAlert}/>
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
                 {...props} user={user} getUser={getUser} getUserRepos={getUserRepos} repos={repos} loading={loading}
                 />
             </Fragment>
           )}
        />
      </Switch>
            </div>
          </div>
        </HashRouter>
  );
}

export default App;
// const loading = false;
// const name= 'yajas';
//     return (
//     <div className = "App">
//       {loading?<h4>loading</h4>:<h1>Hello {name}</h1>}
//     </div>
