import Mcard from "../MCard/card";
import { useState,useEffect } from "react";


let api_key="921d51a23e184eccd560292ce58c13f9"
let base="https://api.themoviedb.org/3/"
let url=base+"/movie/popular?api_key="+api_key





function Movies(){
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);

    useEffect(()=>{
  fetch(url_set).then(res=>res.json()).then(data=>{
    setData(data.results);
  })},[url_set])

    return(
        <>
        <div className="container">
            {
                (movieData.length === 0)?<p className="notfound">Not Found</p>:movieData.map((res,pos)=>{
                    return (
                        <Mcard info={res} key={pos}/>
                    )
                })
            }
        </div>
        </>
    )
}
export default Movies;