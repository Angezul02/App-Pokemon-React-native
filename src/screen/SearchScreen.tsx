import React, {useState} from 'react'
import { View, Platform, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { stylesGlobal } from '../theme/appTheme';
import { useEffect } from 'react';


const screenWhidth = Dimensions.get("window").width

const SearchScreen = () => {

   const {top}= useSafeAreaInsets()
  const {isFetching, simplePokemonList}= usePokemonSearch()

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[ ]>([])

  const [term, setTerm] = useState("")
  
useEffect(() => {

  if (term.length===0 ){
    return setPokemonFiltered([])
  }

  if(isNaN(Number(term))){
    setPokemonFiltered(
      simplePokemonList.filter(
        (poke)=>poke.name.toLowerCase()
        .includes(term.toLowerCase()))
    )
    
  }else{
    const pokemonById=simplePokemonList.find((poke)=>poke.id=== term )
    setPokemonFiltered(
      (pokemonById)? [pokemonById]: []
      // [simplePokemonList.find(
      //   (poke)=>poke.id=== term        
      // )!]
    )
  }
  
  
}, [term])


  if(isFetching){
    return(
        <Loading/>
    )
  }



  return (
    <View style={{flex:1, marginHorizontal:20 }}>
        <SearchInput
        // onDebounced={(value)=> setTerm(value)}
        onDebounced={setTerm}
        style={{
            position:"absolute",
            zIndex: 999,
            width:screenWhidth - 40,
            top:(Platform.OS==="ios")?top:top + 20

        }}
        />
        <FlatList
          data={pokemonFiltered}
          showsVerticalScrollIndicator={false}
          keyExtractor={pokemon => pokemon.id}
          //Header

          ListHeaderComponent={
            <Text
              style={{
                ...stylesGlobal.globalMargin,
                ...stylesGlobal.title,
                marginTop: (Platform.OS==="ios")?top + 60:top + 80,
                color: 'black',
              }}>
              {term}
            </Text>
          }
          numColumns={2}
          renderItem={({item}) => (
            <PokemonCard pokemon={item} />
            
          )}
          
        />
    </View>
  )
}

export default SearchScreen

