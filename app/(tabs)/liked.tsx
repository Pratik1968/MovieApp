import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { getLikedMovies } from '../../feature/movies/moviesSlice'
import MovieItem from '../component/cards'
import { calcWidth, calcHeight } from '../../util/res'

const LikeScreen = () => {
  const data = useSelector((state:RootState)=>state.movies)
  const likedMovies  = getLikedMovies(data)
  return (
    <View style={style.container}>
        <FlatList
        data={likedMovies}
        renderItem={({item})=>{
return (
    <MovieItem data={item}/>
)
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: calcHeight(5)}} />}

        removeClippedSubviews={true} 
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
export default LikeScreen