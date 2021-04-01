import React from 'react';
import Movie from '../component/Movie';
//import Axios from 'axios';
import '../css/Home.css';

function Home() {
    
    const [ movieState, setMovieState] = React.useState({
        isLoading: true,
        movies: []
    });
    const isLoading = movieState.isLoading
    const movies = movieState.movies

    React.useEffect(() => {
        getMovies();
    }, [])
    
    const getMovies = async () => {
        // const {
        //     data: {
        //         data: {
        //             movies 
        //         },
        //     },   
        // } = await Axios.get('https://yts-proxy.now.sh/list_movies.json');
        const movies = await fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
            .then((movies) => movies.json())
                .then((json) => json.data)
                    .then((data) => data.movies)

        setMovieState({
            isLoading :false,
            movies
        });         
    }
    
    return (
        <selection className="container">
            {isLoading ? 
            (
            <div className="loader">
                <span className="loader__text">'Loading...'</span>
            </div>
            ) : (
                
                <div className="movies">
                    {movies.map((movie) => {
                        console.log(movie);
                        return (
                            <Movie
                                key={movie.id} 
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            /> 
                        )})    
                    }
                </div>
                )}
        </selection>
    ) 
}

export default Home;

//https://yts-proxy.now.sh/list_movies.json
//https://yts-proxy.now.sh/movie_details.json