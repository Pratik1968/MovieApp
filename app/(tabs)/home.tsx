import { View, Text,Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useMovie from '../../api/movie/useMovie'

import { calcHeight, calcWidth } from '../../util/res';
import MovieItem from '../component/cards';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MoviesState } from '../../type/movies';
const Home = () => {
useMovie()
   const loading = useSelector((state:RootState)=>state.movies.loading)
    const data = useSelector((state:RootState)=>state.movies.value)
    const error = useSelector((state:RootState)=>state.movies.error)
   if(loading){
    return (
        <View>
            <Text>Loading ...</Text>
        </View>
    )
 }
 if(error!=null){
    return (
        <View>
            <Text>Some error happend : {error?.message}</Text>
        </View>
    )  
 }
// const d:MoviesState ={
//     value:[
//         {
//             id: 1,
//             title: 'Test',
//             like: false,
//             backdrop_path: ''
//         }
//     ]
// }
   return (
    <View style={style.container}>
        <FlatList
        data={data}
        renderItem={({item})=>{
return (
    <MovieItem data={item}/>
)
        }}
        ItemSeparatorComponent={() => <View style={{height: calcHeight(5)}} />}
        removeClippedSubviews={true} 
        showsVerticalScrollIndicator={false}
        initialNumToRender={2} 
        maxToRenderPerBatch={1} 
        updateCellsBatchingPeriod={100} 
        windowSize={7}
        />
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        paddingHorizontal:calcWidth(5),
    paddingTop:calcHeight(5)
    }
})

export default Home