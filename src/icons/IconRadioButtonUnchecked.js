import React from 'react'
import PropTypes from 'prop-types'

const IconRadioButtonUnchecked = ({ size }) =>
  <svg fill='#000000' height={size} viewBox='0 0 24 24' width={size}>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/>
    <path d='M0 0h24v24H0z' fill='none'/>
  </svg>

IconRadioButtonUnchecked.propTypes = {
  size: PropTypes.number,
}

IconRadioButtonUnchecked.defaultProps = {
  size: 24,
}

export default IconRadioButtonUnchecked