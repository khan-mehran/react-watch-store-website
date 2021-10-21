import Card from '../cards/Card';
import styles from './buy.module.css'

const Buy = () => {
    const cards =[
        {id:'1',title:'Search Watch',data:'There are many variations of passages majority in some form,'},
        {id:'2',title:'Customize Watch',data:'There are many variations of passages majority in some form,'},
        {id:'3',title:'Quickly Checkout',data:'There are many variations of passages majority in some form,'},
        {id:'4',title:'Recieve Watch',data:'There are many variations of passages majority in some form,'}
    ];
    return (
        <div className='container'>
            <div className={styles.buy}>
                <div className={styles.buy_heading}>
                    <h2>Buy Easy Steps</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,<br/> 
                        but the majority in some form, by injected of passages ofeven 
                        slightly believable.</p>
                </div> 
                <div className={styles.buy_steps}>
                    {
                        cards.map((item)=>(
                        <Card id={item.id} title={item.title} data={item.data} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Buy
