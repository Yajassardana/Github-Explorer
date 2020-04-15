import React from 'react'
import UserItem from './UserItem.js'
import Spinner from '../Layout/Spinner.js'
import PropTypes from 'prop-types'
const Users =({users,loading})=> {
  if(loading)
  {
    return(<Spinner/>);
  }
  else {
  return(

    <div style={usersStyle}> {users.map((user)=>
       <UserItem key={user.id} user={user}/>
    )}
    </div>
  );
}
}
 Users.propTypes={
   users:PropTypes.array.isRequired,
   loading:PropTypes.bool.isRequired
 }
 const usersStyle={
   display:'grid',
   gridTemplateColumns:'repeat(3,1fr)',
   gridGap:'1rem'
 };
export default Users;
