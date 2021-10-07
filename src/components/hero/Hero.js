import React from 'react'
import Button from '../button/Button'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <img src={'/images/hero.webp'} className={styles.hero_img} alt='hero' />
            <div className={styles.hero_content}>
                <h1>Proper Repairs <br/> For Proper <br/> Watches</h1>
                <p>We have the expertise to repair any watch, including<br/>
                    vintage watches and antique pocket watches.</p>
                <Button label="VIEW MORE" />
            </div>
        </div>
    )
}

export default Hero
