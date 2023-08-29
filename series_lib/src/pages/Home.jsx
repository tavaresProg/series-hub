import { useState, useEffect } from 'react';
import SerieCard from '../components/SerieCard';
import './SeriesGrid.css';

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

    <div className='container'>
      <h2 className="title">Tops do mês</h2>
      <div className="series-container">
        {topSeries.length === 0 && <p>Carregando...</p>}
        {topSeries.length > 0 &&
          topSeries.map((serie) => <SerieCard key={serie.id} serie={serie} />)}
      </div>
    </div>
  )
}

export default Home