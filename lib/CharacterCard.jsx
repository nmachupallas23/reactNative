import { StyleSheet, Text, View, Image} from 'react-native';

export function CharacterCard({ character }) {
  return (
      <View style={styles.card}>
        <Text style={styles.status}>{character.name}</Text>
        <Image
          source={{ uri: character.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>Status: {character.status}</Text>
        <Text style={styles.species}>Species: {character.species}</Text>
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
  backgroundColor: 'green',
  padding: 20,
  width: "60%",
  height: 200,
}
});
      
