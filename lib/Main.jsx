import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { getPersonajes } from './rickyMorty';
import { CharacterCard } from './CharacterCard';
import { FlatList } from 'react-native-web';
export function Main () {
    const [personajes, setPersonajes] = useState([]);
      useEffect(() => {
       getPersonajes().then((data) => {
          setPersonajes(data);
          console.log("Personajes:", data);
        });
      }, []);
   return (
        <>
            {(personajes.length === 0) ? (
                <ActivityIndicator size={"large"} color="#0000ff" />
            ) : (
                <FlatList 
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item, index }) => (
                            <CharacterCard character={item} index={index} />
                        )
                    }>
                </FlatList>
            )}
        </>

    );
    

}