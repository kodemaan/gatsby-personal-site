import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import 'normalize.css'

const Template = ({ children }) =>
  <div className='container flex flex-wrap mx-auto p-6 md:p-0'>
    <div className='w-full flex flex-col justify-center h-16'>
      <div className='text-2xl'>Steven Smith - Senior Software Engineer</div>
    </div>
    <div className='w-full flex h-8'>
      <div className='pr-4'><Link to="/">Home</Link></div>
      <div className='pr-4'><Link to="/about">About Me</Link></div>
    </div>
    <div className='pt-4'>
      {children}
    </div>
  </div>

Template.propTypes = {
  children: PropTypes.element
}

export default Template
