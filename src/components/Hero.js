import react from 'react';
import miniImages from '../assets/images/Group 77.png'

export default function Hero() {
    
    const colors = ["red", 'blue', 'yello', 'violet']

    const coloredPara = colors.map((color) => {
        return `<h3>${color}</h3>`
    })

    console.log(coloredPara)

    return (
        <section className='hero'> 
            <img src={miniImages} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            
        </section>
    )
}