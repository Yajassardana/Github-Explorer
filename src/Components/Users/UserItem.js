import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
const UserItem=({user:{login,avatar_url,html_url}})=>{
   return(
     <div className="card text-center">
       <img src={avatar_url}
         alt=''
         className="round-img"
         style={{width:'60px'}}
         />
       <h3>{login}</h3>
     <div>
       <Link to={`/user/${login}`} className="btn btn-sm my-1 btn-dark">More</Link>
     </div>
     </div>
   );
}
UserItem.propTypes={
  user:PropTypes.object.isRequired
}
export default UserItem;
