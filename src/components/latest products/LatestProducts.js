import React from 'react'
import styles from './latest.module.css'

const LatestProducts = () => {
    return (
        <div className={styles.latestProducts}>
            <div className='container'>
                <div className={styles.product_heading}>
                    <h2>The Perfect Brands</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,<br/> 
                        but the majority in some form, by injected of passages ofeven 
                        slightly believable.</p>
                </div>
                <div className={styles.products_data}>
                    <div className={styles.product_img}>
                        <img src={'/images/ab.png'} alt='blog' />
                    </div>
                    <div className={styles.product_text}>
                        <h3>Post Format: Audio , Lorem Ipsum is simply text</h3>
                        <h4>Oct 07 2021</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim</p>
                    </div>
                    <div className={styles.product_img}>
                        <img src={'/images/bca.png'} alt='blog' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProducts
