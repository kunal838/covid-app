import React , {useEffect,useState} from 'react'
import { StyleSheet, Text, View,ScrollView ,Image } from 'react-native'
import Total from '../../components/Total'
import Country from '../../components/Country'
import {AntDesign,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
const Main = () => {

 

   //https://disease.sh/v3/covid-19//v3/covid-19/continents
    return (
        <View style={styles.container}>
            
      
         <Image source={require('../../images/1.jpg')} style={styles.image} />
         <View style={styles.wrapper}>
         <Text  style={styles.text1}>
            COVID-19
           
         </Text>
         <Total/>
         <View style={{marginBottom:150}}/>
         <Country/>
         
        
         
        

       </View>
       </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#222a36'
        
       
    },
    image:{
        height:290,
        borderRadius:70,
        width:'100%',
        position:"absolute",
        top:-20
    },
    wrapper:{
        alignItems:"center",
        marginVertical:100
    },
    text1:{
       color:"white" ,
       fontSize:20,
       letterSpacing:10,
       fontWeight:"700"
    },
    top:{
        zIndex:100,
        marginVertical:30,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between"
    }
    
})
