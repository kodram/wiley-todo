import React from 'react'
import PropTypes from 'prop-types'

const IconEdit = ({ size }) =>
  <svg fill='#000000' height={size} viewBox='0 0 24 24' width={size}>
    <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/>
    <path d='M0 0h24v24H0z' fill='none'/>
  </svg>

IconEdit.propTypes = {
  size: PropTypes.number,
}

IconEdit.defaultProps = {
  size: 24,
}

export default IconEdit
