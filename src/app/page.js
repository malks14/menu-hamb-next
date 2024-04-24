'use client'
import {useState, useEffect} from 'react';
import styles from "./page.module.css";
import api from "./page.server";
import CarouselSplide from './components/Carousel/CarouselSplide';


export default function Home() {
  // const [menuSub, setMenuSub] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      
      const links = await api.links.fetch()
      setData(links)
    }
    fetchData()

  }, [])
  // console.log("soy menu sub", links);
  return (

    <main className={styles.main}>
          <title>Meny hamb</title>
<CarouselSplide data={data}/>
      <ul>
        {data.map((link, i) => (
          <li key={i}>
            <a href={link.url}>{link.subtitulo}</a>
          </li>
        ))}
        
      </ul>
{/* <Carousel data={links} onIndexChange={setCarouselIndex}/> */}
    </main>
  );
}
