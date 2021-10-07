import React from 'react'
import styles from './button.module.css'

const Button = ({label}) => {
    return (
        <div>
            <button className={styles.button}>{label}</button>
        </div>
    )
}

export default Button
