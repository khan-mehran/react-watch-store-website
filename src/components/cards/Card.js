import React from 'react'
import styles from './card.module.css'

const Card = ({id,title,data}) => {
    return (
        <div className={styles.buy_steps}>
            <div className={styles.steps}>
                    <h3>{id}</h3>
                    <h5>{title}</h5>
                    <p>{data}</p>
                </div>
        </div>
    )
}

export default Card
