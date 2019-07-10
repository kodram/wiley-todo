import React from 'react'
import PropTypes from 'prop-types'

const IconCheck = ({ size }) =>
  <svg fill='#000000' height={size} viewBox='0 0 24 24' width={size}>
    <path d='M0 0h24v24H0z' fill='none'/>
    <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/>
  </svg>

IconCheck.propTypes = {
  size: PropTypes.number,
}

IconCheck.defaultProps = {
  size: 24,
}

export default IconCheck
