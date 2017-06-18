import React from 'react'
import {Link}from 'react-router-dom'
import PropTypes from 'prop-types'

// /user:orangeleopard347
const UserItem = (props) => (
  <Link
    className='box'
    onClick={props.onClick}
    to={`/users:${props.user.login.username}`}>
    <img src={props.user.picture.thumbnail} alt="pic"/>
    <span>{props.user.login.username}</span>
  </Link>
)

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem