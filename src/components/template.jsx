import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Template = (props) => {
  const { children, pageContext } = props
  const { frontmatter } = pageContext
  return (<div className='container flex flex-wrap mx-auto'>
    <title>{`Steve Smith - ${frontmatter.title}`}</title>
    <div className='w-full flex flex-col justify-center h-16'>
      <div className='text-xl sm:text-2xl'>Steven Smith - Senior Software Engineer</div>
    </div>
    <div className='w-full flex'>
      <div className='nav-link-first'><Link to="/">Home</Link></div>
      <div className='nav-link'><Link to="/about">About Me</Link></div>
    </div>
    <div className='pt-4'>
      {children}
    </div>
  </div>)
}

Template.propTypes = {
  children: PropTypes.element,
  pageContext: PropTypes.object
}

export default Template
