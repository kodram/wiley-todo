import React from 'react'
import PropTypes from 'prop-types'

const IconDelete = ({ size }) =>
  <svg fill='#000000' height={size} viewBox='0 0 24 24' width={size}>
    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/>
    <path d='M0 0h24v24H0z' fill='none'/>
  </svg>

IconDelete.propTypes = {
  size: PropTypes.number,
}

IconDelete.defaultProps = {
  size: 24,
}

export default IconDelete
