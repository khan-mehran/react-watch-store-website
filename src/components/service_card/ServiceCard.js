import React from 'react'
import Button from '../button/Button';
import styles from './serCard.module.css'

const ServiceCard = ({img,title,data}) => {
    console.log(img);
    return (
        <div className={styles.serviceCard}>
            <div className={styles.serviceCard_img}>
                <img src={img} alt='services' className={styles.ser_img} />
            </div>
            <div className={styles.serviceCard_text}>
                <h2>{title}</h2>
                <p>{data}</p>
                <Button label='Show more' />
            </div>
        </div>
    )
}

export default ServiceCard
