import { useState, useEffect } from 'react';
import SerieCard from '../components/SerieCard';
import Plans from '../components/Plans';
import './SeriesGrid.css';
import Accordion from '../components/Accordion';
import photo from '../assets/home-img.png';

const seriesUrl = import.meta.env.VITE_API_SERIES;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {


  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopSeries(data.results);
  }

  useEffect(() => {

    const getTopSeries = `${seriesUrl}top_rated?${apiKey}`;
    getTopRatedSeries(getTopSeries);


  }, [])

  return (

    <div className="wrapper">

      <img src={photo} className='home-img'/>

      <div className='container'>
        <h2 className="title">Assista grátis, com anúncios.</h2>
        <div className="series-container">
          {topSeries.length === 0 && <p>Carregando...</p>}
          {topSeries.length > 0 &&
            topSeries.slice(12,18).map((serie) => <SerieCard key={serie.id} serie={serie} />)}
        </div>

        <Plans/>

        <h2 className="title">Assine para ter o melhor que temos a oferecer</h2>
        <h3 className='subtitle'>+100 séries e filmes para assistir sem anúncios.</h3>
        <div className="series-container">
          {topSeries.length === 0 && <p>Carregando...</p>}
          {topSeries.length > 0 &&
            topSeries.slice(0,9).map((serie) => <SerieCard key={serie.id} serie={serie} />)}
        </div>
      </div>

      <Accordion/>

    </div>
  )
}

export default Home