import React,{useState} from 'react'
import PropTypes from 'prop-types'
const Search =({searchUsers, clearUsers, filled, setAlert})=> {
  const [text,setText]  =  useState('');//State ka naam, set method for that state and then setStae ke andar uss state ki default value
  const onSubmit=(e)=>{
    e.preventDefault();
    if(text==='')
    {
      setAlert('Please enter something','light');
    }
    else {
      searchUsers(text);
      setText('');
    }
  };
  const onChange=(e)=>setText(e.target.value);
    return(
      <div className='text-center top'>
        <form className="form"  onSubmit={onSubmit}>
          <input type="text" placeholder="Search Users" value={text} name='text' onChange={onChange}/>
          <input type="submit" value='search' className='btn btn-dark btn-block'/>
        </form>
        {filled?<button className="btn-block btn-light btn " onClick={clearUsers}>clear</button>:<></>}
      </div>
    );
}
Search.propTypes={
  searchUsers:PropTypes.func.isRequired,
  clearUsers:PropTypes.func.isRequired,
  filled:PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired
};

export default Search;
