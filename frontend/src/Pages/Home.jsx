import { useState, useEffect } from 'react'
import ActivityButton from '../components/ActivityButton';
import axios from 'axios';

const Home = () => {
    const [astronomyData, setAstronomyData] = useState([]);

  const fetchAstronomyData = async () => {
    try{
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5');
      setAstronomyData(response.data)
    } catch (error){
      console.error('Error fetching astronomy api')
    }
  }

  useEffect(() => {
    fetchAstronomyData();
  }, []);
    return (
    <div>
      <div className='AstronomyInfo'>
        <h1>Astronomy Information</h1>
        <ul>
          {astronomyData.map(savedAstronomy =>(
            <li key={savedAstronomy.title}>
            <p><strong>Title: </strong>{savedAstronomy.title}</p>
            <img src ={savedAstronomy.url} alt="Picture of Astronomy"/>
            <p><strong>Date: </strong>{savedAstronomy.date}</p>
            <p><strong>Explanation: </strong>{savedAstronomy.explanation}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='ActivityGenerator'>
      <ActivityButton />
      </div>
    </div>
    );
};

export default Home