import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, url, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [url])

    console.table(movies)

    return (
        <div className="row">
           <h2>{title}</h2> 

            <div className={`row__posters`}>
                {
                    movies.map(movie => (
                        <img 
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}
                        />
                    ))
                };
            </div>
        </div>
    )
};

export default Row;