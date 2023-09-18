import React, { useState, useEffect } from 'react';
import Mcard from "../MCard/card";


function Movies({ searchQuery }) {
    const [movieData, setData] = useState([]);
    useEffect(() => {
        let base = "https://api.themoviedb.org/3/";
        let url = base + "search/movie?api_key=" +process.env.REACT_APP_API_KEY+ "&query=" + searchQuery;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
            });
    }, [searchQuery]);

    return (
        <>
            <div className="container">
                {movieData.length === 0 ? (
                    <p className="notfound">Type Name of Movies in Search Box</p>
                ) : (
                    movieData.map((res, pos) => {
                        return <Mcard info={res} key={pos} />;
                    })
                )}
            </div>
        </>
    );
}

export default Movies;
