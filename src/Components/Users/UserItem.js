import React from 'react'
import PropTypes from 'prop-types'

class UserItem extends React.Component {
  render () {
    const {id,login,avatar_url,html_url}=this.props.user;
   return(
     <div className="card text-center">
       <img src={avatar_url}
         className="round-img"
         style={{width:'60px'}}
         />
       <h3>{login}</h3>
     <div>
       <a href={html_url} className="btn btn-sm my-1 btn-dark">More</a>
     </div>
     </div>
   );
  }
}

export default UserItem;
