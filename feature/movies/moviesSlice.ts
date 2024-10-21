import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { MoviesState, MoviesType } from "../../type/movies";
import { RootState } from "../../store/store";

const initialState:MoviesState ={
    value:[],
    loading:true,
    error:null
}

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setData:(state,action:PayloadAction<MoviesType[]>)=>{

            state.value = action.payload
            state.loading = false; 
            state.error = null; 
          
        },
        setLike:(state,action:PayloadAction<{id:number,like:boolean}>)=>{
            state.value =  state.value.map((movie) =>{
            if(movie.id === action.payload.id){
return{
    ...movie,
    like:action.payload.like
}
            }
            return movie
            }
        );
        },
        setLoading:(state,action:PayloadAction<{value:boolean}>)=>{
            state.loading = action.payload.value;
        },
        setError:(state,action:PayloadAction<Error|null>)=>{
            state.error = action.payload;
            state.loading = false;
        }
    }
})
export const getLikedMovies = (state:MoviesState)=>state.value.filter((movie)=>movie.like)

export const {setData,setLike,setError,setLoading} = moviesSlice.actions
export default moviesSlice.reducer