import React from 'react'
import { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authprovider'

const Header = () => {

    const {isloggedIn, setIsloggedIN} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsloggedIN(false)
        console.log('Logged out ');
        navigate('/login')
}
    
    return (
        <>
            <nav className='navbar contianer pt-3 pb-3 align-items-start'>
                <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
                <div>
                    {isloggedIn ?(
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    ):(
                    <>
                        <Button text='Login' class='btn-outline-info' url='/login'/>
                        &nbsp;
                        <Button text='Registor' class='btn-info'url='/register'/>
                    </>    
                    )}
                </div>
            </nav>
        </>
    )
}

export default Header
