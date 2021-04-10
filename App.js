import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/screens/Main';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
     
     <NavigationContainer>
      <Stack.Navigator screenOptions={{
                  headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home}         options={{
          title: 'NOBEL COVID-19',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }} />
        <Stack.Screen name="main" component={Main}         options={{
          title: 'NOBEL COVID-19',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
    
   
  },
});
