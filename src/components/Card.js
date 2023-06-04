import react from 'react';
// import swimmerImg from '../assets/images/image 12.png'

export default function Card(props){
    console.log(props);
    return (
        <section className='card-box'>
            <div className='card'>
                {props.item.openSpots === 0 && <div className='sold-out'>SOLD OUT</div>}
                {/* <img src= {require('../assets/images/image 12.png')} /> */}
                <img src={props.item.img} />
                <div>
                    {/* <img src={props.star} /> */}
                    <span>{props.item.stats.rating}</span>
                    <span className='gray'> ({props.item.stats.reviewCount}) {props.item.country}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className='bold'>From ${props.item.price} </span> / Person</p>
            </div>
        </section>
    )
}