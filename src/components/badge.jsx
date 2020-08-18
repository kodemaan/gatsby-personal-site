import React from 'react'
import PropTypes from 'prop-types'

const Badge = (props) =>
  <div className={`flex h-10 mr-2 ${props.className}`}>
    <div style={{ backgroundColor: props.iconColor }} className='flex flex-col justify-center rounded-l-md w-12 px-2'>
      <img className='h-8' src={`https://simpleicons.org/icons/${props.icon}.svg`} />
    </div>
    <div className='rounded-r-md flex flex-col w-full justify-center bg-gray-200 px-2 text-center'>
      {props.title}
    </div>
  </div>

Badge.defaultProps = {
  className: ''
}
Badge.propTypes = {
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default Badge
