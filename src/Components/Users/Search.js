import React from 'react'
import PropTypes from 'prop-types'
class Search extends React.Component {
  static propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    filled:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired
  };
  state={
    text:''
  };
  onSubmit=(e)=>{
    e.preventDefault();
    if(this.state.text==='')
    {
      this.props.setAlert('Please enter something','light');
    }
    else {
      this.props.searchUsers(this.state.text);
      this.setState({text:''});
    }
  };
  onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render () {
    const {filled,clearUsers}= this.props;
    return(
      <div className='text-center'>
        <form className="form"  onSubmit={this.onSubmit}>
          <input type="text" placeholder="Search Users" value={this.state.text} name='text' onChange={this.onChange}/>
          <input type="submit" value='search' className='btn btn-dark btn-block'/>
        </form>
        {filled?<button className="btn-block btn-light btn " onClick={clearUsers}>clear</button>:<></>}
      </div>
    );

  }
}

export default Search;
