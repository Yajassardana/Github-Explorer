import React from 'react'
import UserItem from './UserItem.js'

class Users extends React.Component {
  state={
    users:[
    {
      id: 1,
      login:'mojombo',
      html_url:'https://github.com/mojombo',
      avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4'
    },
    {
      id: 2,
      login:'defunkt',
      html_url:'https://github.com/defunkt',
      avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4'
    },
    {
      id: 3,
      login:'pjhyett',
      html_url:'https://github.com/pjyett',
      avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4'
    }
  ]
  };
  render () {
  return(
    <div style={usersStyle}>  {this.state.users.map((user)=>
       <UserItem key={user.id} user={user}/>
    )}
    </div>
  );
  }
}
 const usersStyle={
   display:'grid',
   gridTemplateColumns:'repeat(3,1fr)',
   gridGap:'1rem'
 };
export default Users;
