import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import spinner from './spinner.gif'
//arrow function will directly return this as 1 or less lines of js is present inside the function
const Spinner = (props) =><Fragment>
    <img src={spinner} alt="Loading..." style={{width:'200px',margin:'auto',display:'block'}}/>
    </Fragment>

export default Spinner;
