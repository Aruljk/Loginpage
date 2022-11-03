import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div className='start-home'>
      <div className='containers'>
        <div className='start-head'>
      <h2><Link to={"/"}><button>GoBack</button></Link></h2>
      <h1><Link to={"/Task"}><button>AddTask</button></Link></h1>
      </div>
      </div>
    </div>
  )
}

export default Home