import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <Link className='link' to='/'>
                Home
            </Link>
            <Link className='link' to='/about'>
                About
            </Link>
            <Link className='link' to='/main'>
                Main
            </Link>
            <Link className='link' to='/glossary'>
                Glossary
            </Link>
        </div>
    )
}

export default Nav;


