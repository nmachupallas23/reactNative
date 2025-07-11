import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import Logo from './components/Logo';
import { Main } from './lib/Main';

export default function App() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
   getPersonajes().then((data) => {
      setPersonajes(data);
      console.log("Personajes:", data);
    });
  }, []);
  return (

    <View style={styles.container}>      
      <StatusBar  />
      <Logo style={styles.logo}/>
      <Main />           
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',    
    alignItems: 'center',

    shadowOffset: {
      width: 1,
      height: 3,
      color: '#1f1f1f',
    },
    shadowOpacity: 0.90,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  species: {
    fontSize: 16,
    color: '#fff',
  },
  status: {
    fontSize: 16,
    color: '#fff'
  },
  
  name: {
    fontSize: 16,
    color: '#fff'
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
,
logo:{
  backgroundColor: 'orange',
  padding: 20,
  width: "60%",
  height: 200,
}
});

