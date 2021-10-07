
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row ,Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './component/News/News';

function App() {
  const [news , setNews] = useState();
  useEffect( ()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-03&sortBy=publishedAt&apiKey=a895da054749496bb1ffafd0b5d3fb37')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[]);

  return (
    <div className="App">
    {
    news.length ===0 ?   <Spinner animation="border" variant="danger" /> 
    :
    <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}/>)
            }
          </Row>
    }
    </div>
  );
}

export default App; 

;
