import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import templateStyles from './template.module.css'

const Template = ({ children }) =>
  <div className={templateStyles.body}>
    <div className={templateStyles.title}>
      <h1>My Personal Site</h1>
    </div>
    <div className={templateStyles.navigation}>
      <div className={templateStyles.link}><Link to="/">Home</Link></div>
      <div className={templateStyles.link}><Link to="/about">About Me</Link></div>
    </div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    {children}
  </div>

Template.propTypes = {
  children: PropTypes.element
}
export default Template
