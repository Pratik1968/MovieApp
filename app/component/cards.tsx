import React, { useState } from "react"
import { Image,StyleSheet, View,Text, TouchableOpacity } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { calcHeight, calcWidth } from "../../util/res";
import { MoviesType } from "../../type/movies";
import { useDispatch } from "react-redux";
import { setLike } from "../../feature/movies/moviesSlice";
const MovieItem = ({data}:{data:MoviesType})=>{
    return(
         <View style={style.card}>
         <Image
         style={style.cardImage}
         source={
     {
         uri:`${process.env.EXPO_PUBLIC_IMAGE_URL}${data.backdrop_path}`
  // uri:'https://placehold.co/600x400/png'
    }
         }
         />
       
<HorizontalGroup data={data}/>
     </View>
     )
 }
 const HorizontalGroup = ({data}:{data:MoviesType})=>{
    return(
        <View style={style.horizontalGroup}>
  <Text>
             {data.title}
         </Text>
         <Like like={data.like} id={data.id}/>
        </View>
    )
 }
 const Like = ({like,id}:{like:boolean,id:number})=>{
   const dispact = useDispatch()
    return (
        <View>
        <TouchableOpacity  onPress={()=>dispact(setLike({id:id,like:!like}))}>
     { (like) ? <FontAwesome name="heart" size={24} color="blue" /> :<FontAwesome5 name="heart" size={24} color="black" />}
        </TouchableOpacity>
    </View>
    )
 }
 const style = StyleSheet.create({
    card:{
width:'100%',
backgroundColor:'#fff',

    },
    cardImage:{
width:'100%',
height:calcHeight(50),
    },
    horizontalGroup:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
padding:calcWidth(2)
}
})
 export default MovieItem