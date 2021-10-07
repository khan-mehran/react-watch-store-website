import React, { useState } from 'react'
import Button from '../button/Button'
import ServiceCard from '../service_card/ServiceCard'
import styles from './services.module.css'

const Services = () => {
    const [cards, setCards] = useState('ROLEX')
    const ROLEX =[
        {img:'/images/serviceA.png', title: 'Choose your first watch smarwrist',
        data: "There are many vThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyon in some form, by cted words which don't loy be, or which don't look even slightlyable.ariations of passages of Lorem Ipsum available"}
    ]
    const ARMANI = [
        {img:'/images/serviceB.png', title: 'Watches newlook Magnifier',
        data: "There are many vThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyon in some form, by cted words which don't loy be, or which don't look even slightlyable.ariations of passages of Lorem Ipsum available"}
    ]
    const GUCCI = [
        {img:'/images/serviceC.png', title: 'Watch Repair Magnifier',
        data: "There are many vThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyon in some form, by cted words which don't loy be, or which don't look even slightlyable.ariations of passages of Lorem Ipsum available"}
    ]
    const HUBLOT = [
        {img:'/images/serviceD.png', title: 'Smart and Best Watches',
        data: "There are many vThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyon in some form, by cted words which don't loy be, or which don't look even slightlyable.ariations of passages of Lorem Ipsum available"}
    ]
    return (
        <div className="container">
        <div className={styles.services}>
            <div className={styles.services_text}>
                <h2>The Perfect Brands</h2>
                <p>There are many variations of passages of Lorem Ipsum available,<br/> 
                    but the majority in some form, by injected of passages ofeven 
                    slightly believable.</p>
            </div>
            <div className={styles.service_nav}>
                    <ul>
                        <li>
                           <span onClick={() =>{setCards('ROLEX')}}> <Button label="ROLEX"/></span>
                        </li>
                        <li>
                            <span onClick={() =>{setCards('ARMANI')}}> <Button label="ARMANI"/></span>
                        </li>
                        <li>
                            <span onClick={() =>{setCards('GUCCI')}}> <Button label="GUCCI"/></span>
                        </li>
                        <li>
                            <span onClick={() =>{setCards('HUBLOT')}}> <Button label="HUBLOT"/></span>
                        </li>
                    </ul>
            </div>
            <div className={styles.cards}>
                        {
                           cards==='ROLEX' && ROLEX.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <ServiceCard img={item.img} title={item.title} data={item.data} />
                                </div>
                                )
                            })
                            
                        }
                         {
                           cards==='ARMANI' && ARMANI.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <ServiceCard img={item.img} title={item.title} data={item.data} />
                                </div>
                                )
                            })
                            
                        }
                        {
                           cards==='GUCCI' && GUCCI.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <ServiceCard img={item.img} title={item.title} data={item.data} />
                                </div>
                                )
                            })
                            
                        }
                          {
                           cards==='HUBLOT' && HUBLOT.map((item)=>{
                                return(
                                    <div className={styles.cards_img}>
                                    <ServiceCard img={item.img} title={item.title} data={item.data} />
                                </div>
                                )
                            })
                            
                        }
                </div>
        </div>
        </div>
    )
}

export default Services
