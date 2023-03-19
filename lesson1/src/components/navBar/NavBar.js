import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
            <ul style={{display:'flex' , listStyleType:'none' , justifyContent:'center'}}>
                <li style={{marginRight:'15px'}}>
                    <NavLink  to='/' 
                        className='link'>
                        Main Page
                    </NavLink>
                </li>
                <li style={{marginRight:'15px'}}>
                    <NavLink to='/about' 
                        className='link'>
                        About Page
                    </NavLink>
                </li>
                <li style={{marginRight:'15px'}}>
                    <NavLink to='/blogs' 
                        className='link'>
                        Blogs Page
                    </NavLink>
                </li>
                <li style={{marginRight:'15px'}}>
                    <NavLink to='/info' 
                        className='link'>
                        Info Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user' 
                        className='link'>
                        User Page
                    </NavLink>
                </li>
            </ul>
    )
}

export default NavBar
