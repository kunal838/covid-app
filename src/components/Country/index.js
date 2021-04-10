import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'

const Country = () => {
    const [infos , setInfo] = useState([])
    useEffect(() =>{
     // fetch("https://disease.sh/v3/covid-19/all").then((Response) => Response.json()).then((data) =>{alert(data.cases)})
     const getData = async() =>{
       const Response = await fetch("https://disease.sh/v3/covid-19/countries")
       const data = await Response.json()
       setInfo(data)
      // alert(data.cases)
     }
  
     getData();
    },[])
    
        
   
           
    
    return (
        <View style={styles.container}>
        {/*infos.map((info) => (
          <View key={info.id}>
          <Text>{info.country}</Text>
          <Text>{info.updated}</Text>
          </View>
        ))*/}
         <FlatList
        data={infos}
        
        renderItem={(({item}) =>(
          <View style={styles.contain}>
          <Text style={{
            fontSize:24,
            fontWeight:"bold",
            letterSpacing:2
          }}>{item.country}</Text>
           
           <Text style={{
            fontSize:16,
            marginVertical:10,
            fontWeight:"bold",
            color:"grey"
            
          }}>Total cases: {item.cases}</Text>
           <Text style={{
            fontSize:16,
            marginVertical:10,
            fontWeight:"bold",
            color:"grey"
            
          }}>Total recovered: {item.recovered}</Text>

<Text style={{
            fontSize:16,
            marginVertical:10,
            fontWeight:"bold",
            color:"grey"
            
          }}> Population: {item.population}</Text>
         
          </View>
        ))}
        keyExtractor={(item) => item.id}
        //extraData={selectedId}
        horizontal
        
      />

        </View>
    )
}

export default Country

const styles = StyleSheet.create({
  contain:{
    backgroundColor:"white",
    borderRadius:30,
    alignItems:"center",
    
    height:200,
    padding:10,
    margin:10,
    width:200
  },
})
