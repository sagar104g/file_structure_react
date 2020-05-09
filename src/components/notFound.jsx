import React from 'react';
import { connect } from 'react-redux'
import {notFoundMessage} from '../actions/notFound'
function notFound(props) {
  let handleClick = () => {
    props.toggleMessage()
  }
  return (
    <div>
    <h1>{props.message}</h1>
    <button onClick={handleClick}>Change Message</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
  message: state.notFound.notFoundInfo
}}

const mapDispatchToProps = dispatch => ({
  toggleMessage: () => dispatch(notFoundMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(notFound);