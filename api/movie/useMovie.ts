import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import request from "../request";
import { useDispatch, useSelector } from "react-redux";
import {setData, setError, setLoading } from "../../feature/movies/moviesSlice";
import { RootState } from "../../store/store";
import { MoviesResponse, MoviesType } from "../../type/movies";
import { useEffect } from "react";

const useMovie = ()=>{
    const dispatch = useDispatch()
    const {data,isLoading,error} = useQuery<MoviesResponse>(
        {
            queryKey:['movies'],
            queryFn:fetchMovie,     
        },   
    )
   useEffect(()=>{ 
    if(isLoading){
       dispatch(setLoading({value:true}))
    }
if(error!==null){
   dispatch(setError(error))
   dispatch(setLoading({value:false}))

}
if(data){
    const results = data.results.map(({id,title,backdrop_path})=>({id,title,backdrop_path,like:false}))
   dispatch(setData(results as unknown as MoviesType[]))
    dispatch(setLoading({value:false}))

}
},[data,isLoading,error])

    
}

const fetchMovie = async ()=>{

  return request.get<MoviesResponse>('3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc').then(res=>res.data)
}
export default useMovie