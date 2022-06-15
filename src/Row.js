import React, { useState , useEffect } from 'react'
import axios from './axios';
import './Row.css';

const base_url= "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
            {/* posters */}

            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            ))}
        </div>
         
    </div>
  )
}

export default Row

/*
line 1: import your hooks
line 4: using state aka variables "movies" and hooks "useState"
line 6: create a function with 2 arguments in fat arrow syntax that pulls from TMDB (the poster
useEffect function: [] will run only once on page load if you pass in something like movies it will
then only run when movies changes (forms a dependency)
line 9: async function created to be able to make request to external source. make request (promise)
 and await (answer) to come back before proceeding. .get(fetchUrl) takes the beginning of URL from 
 axios.js (baseURL) and concatenates with end of URL from request.js 
line 12: async call, if you have a useEffect you have to pass in the argument to the array because 
you created a dependency and needs to change when called 

line 24: function passes in titles and posters to the DOM via props "title"
line 31: key=   will optimize the speed loads time for speed
*/