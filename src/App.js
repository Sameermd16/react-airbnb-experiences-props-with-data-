
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'

function App() {

  const cards = data.map((item => {
    return (
      <Card 
        // key = {item.id}
        item = {item}
        // img={item.img}
        // rating={item.stats.rating}
        // reviewCount= {item.stats.reviewCount}
        // country={item.country}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  }))

  return (
    
    <div>
      <Navbar />
      <Hero />
      <section className='cards-container'>
      {cards}
      </section>


      {/* <div className='card-container'>
        <Card 
          img='images/image 12.png'
          name='ms.zaferes'
          phone='(212) 555-1234'
          email='zaferes@gmail.com'
        />
        <Card 
          img='images/wedding-photography 1.png'
          name='ms.wedder'
          phone='(212) 555-2345'
          email='wedder@gmail.com'
        />
        <Card 
          img='images/mountain-bike 1.png'
          name='ms.biker'
          phone='(212) 555-3456'
          email='biker@gmail.com'
        />
      </div> */}
    </div>
      
  );
}

export default App;
