import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import styles from './header.module.css'

const Header = () => {
    const handleClick =()=>{
       console.log('here')       
    }
    return (
        <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={'/images/logo.png'} className={styles.logo_img} alt='logo' />
                </div>
                <div className={styles.navbar}>
                    <nav>
                    <button onClick={handleClick} className={styles.toggle_btn}>X</button>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/login'><Button label='Login' /></Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
    )
}

export default Header
