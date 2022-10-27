import React from 'react';
import './styles/App.css';
import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.netflixOriginal} isLargeRow={true}/>
      <Row title="Trending Now" url={requests.trending} /> 
      <Row title="Top Rated" url={requests.topRated} />
      <Row title="Action Movies" url={requests.actionMovies} /> 
      <Row title="Comedy Movies" url={requests.comedyMovie} /> 
      <Row title="Horror Movies" url={requests.horrorMovies} /> 
      <Row title="Romance Movies" url={requests.romanceMovies} /> 
      <Row title="Documentaries" url={requests.documentaries} /> 
    </div>
  );
}

export default App;
