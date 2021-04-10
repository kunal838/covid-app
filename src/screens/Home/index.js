import React,{useState}from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'; 


const Home = ({navigation}) => {
    const [dark,setDark] = useState(false)
    if (dark) {
        return (
            <View style={styles.container}>
               
                
           <Image source={require('../../images/hammer1.png')} style={styles.image} />
           <TouchableOpacity onPress={() =>{
               setDark(!dark)
           }}>
                    <View style={{
                        backgroundColor:"#edf3ff",
                        padding:10,
                        borderRadius:30
                        
                    }}>
                        <Text style={{
                            fontSize:24
                        }}>{dark ?"Dark":"Light"}</Text>
                    </View>
                </TouchableOpacity>
           <View style={styles.wrapper1}>
           <Text style={styles.title}>
           COVID-19
           </Text>
          
           <View style={styles.wrapper2}>
           <Text style={styles.text}>
           Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.
        Make sure it covers both your nose, mouth and chin.
        When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.
        Don’t use masks with valves.
    
    
    
           </Text>
           <Text style={styles.text}>
    
    
        Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak.
     
           </Text>
           </View>
           
           </View>
            <TouchableOpacity onPress={() => navigation.navigate('main')}>
                <View style={styles.button}>
                    <Text style={styles.btext}>Next</Text>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
            </TouchableOpacity>
             
            </View>
        )

    }
    
    
    
    
        
    
    else {
        return (
            <View style={styles.container1}>
               
                
           <Image source={require('../../images/hammer1.png')} style={styles.image} />
           
           <TouchableOpacity onPress={() =>{
               setDark(!dark)
           }}>
                    <View style={{
                        backgroundColor:"#3b3b3b",
                       borderRadius:20
                        
                    }}>
                        <View style={{
                       
                       padding:10,
                       
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:20
                        
                        
                    }}>
                        <Text style={{
                            fontSize:24,
                            color:"white"
                        }}>{dark ?"Dark":"Light"}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
           <View style={styles.wrapper1}>
           <Text style={styles.title1}>
           COVID-19
           </Text>
          
           <View style={styles.wrapper2}>
           <Text style={styles.text}>
           Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.
        Make sure it covers both your nose, mouth and chin.
        When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.
        Don’t use masks with valves.
    
    
    
           </Text>
           <Text style={styles.text}>
    
    
        Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak.
     
           </Text>
           </View>
           
           </View>
            <TouchableOpacity onPress={() => navigation.navigate('main')}>
                <View style={styles.button}>
                    <Text style={styles.btext}>Next</Text>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
            </TouchableOpacity>
             
            </View>
        )
        
    }}
             
const styles = StyleSheet.create({
    container:{
        
        alignItems:"center",
        flex:1,
        backgroundColor:"#f7f9ff"
    },
    image:{ 
        height:200,
        width:200
    },
    title: { 
        color:"black",
        fontSize:34,
        fontWeight:"bold",
    },
    text: { 
        color:"white",
        fontSize:20,
        fontWeight:"500",
        color:"grey"
    },
    wrapper2: {
        margin:10
    },
    wrapper1: {
        margin:15,
        alignItems:"flex-start"
    },
    button: {
        backgroundColor:"#edf3ff",
        margin:10,
        padding:5,
        width:100,
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center"

    },
    btext:{
        fontSize:24,
        fontWeight:"800",
        color:"#3B3B3B"

    },
    title1: { 
        color:"white",
        fontSize:34,
        fontWeight:"bold",
    },
    container1:{
        
        alignItems:"center",
        flex:1,
        backgroundColor:"black"
    }
})
    export default Home;
