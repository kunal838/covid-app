import React , {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Total = () => {
    const [infos , setInfo] = useState([])
  useEffect(() =>{
   // fetch("https://disease.sh/v3/covid-19/all").then((Response) => Response.json()).then((data) =>{alert(data.cases)})
   const getData = async() =>{
     const Response = await fetch("https://disease.sh/v3/covid-19/all")
     const data = await Response.json()
     setInfo(data)
    //alert(data.updated)
   }

   getData();
  },[])
    return (
        <View style={styles.container}>
        <View style={styles.container1}>
           <Text style={styles.text1}>Total cases: {infos.cases}</Text>
        </View>
        <View style={styles.container1}>
           <Text style={styles.text2}>Total recovered: {infos.recovered}</Text>
        </View>
        </View>
    )
}

export default Total

const styles = StyleSheet.create({
    container1:{
        alignItems: 'center',
        
        height:125,
        width:190,
        backgroundColor:'#2A333F',
        padding:20,
        margin:5,
        borderRadius:20,
         
    },
    container:{
        flexDirection:"row",
        margin:10,
        padding:10,
         
    },
    text:{
        color:'#FFF',
        fontWeight:"bold",
        fontSize:20,
        letterSpacing:1.5
    },
    text1:{
        color:'white',
        fontWeight:"bold",
        fontSize:20,
        letterSpacing:1.5
    },
    text2:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:20,
        letterSpacing:1.5
    },
    text3:{
        color:'red',
        fontWeight:"bold",
        fontSize:20,
        letterSpacing:1.5
    },
    wrapper1:{
        marginVertical:20
    },
    wrapper2:{
        marginVertical:20
    },
    wrapper3:{
        marginVertical:20
    },
})
