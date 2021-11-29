import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
        <h1>Welcome to your fitness journey!</h1>
        <Link className='link' to='/about'>
            <button>Let's get started!</button>
        </Link>
        </div>
    )
}

export default Home;

// Home Screen