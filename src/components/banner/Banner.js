import React from 'react'
import Button from '../button/Button'
import styles from './banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className='container'>
                <div className={styles.banner_data}>
                    <div className={styles.banner_text}>
                        <h2>Half price eye test and 10% off</h2>
                        <p>Save 20% upon presentation of your valid NUS 
                            Extra card and Vision Express voucher.</p>
                    </div>
                    <div className={styles.banner_btn}>
                        <Button label='Shop Now' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner