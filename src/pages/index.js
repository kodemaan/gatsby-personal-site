import React from 'react'
import { Link } from 'gatsby'

const Home = () =>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Personal site</h1>
    <p>What a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/about/">About me</Link>
  </div>
export default Home
