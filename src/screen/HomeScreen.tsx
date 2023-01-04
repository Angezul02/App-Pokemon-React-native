import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {stylesGlobal} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginate';
import {FadeInImage} from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={{...stylesGlobal.pokebolaBackground}}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          keyExtractor={pokemon => pokemon.id}
          //Header

          ListHeaderComponent={
            <Text
              style={{
                ...stylesGlobal.globalMargin,
                ...stylesGlobal.title,
                top: top + 20,
                marginBottom: top + 30,
                color: 'black',
              }}>
              Pokedex
            </Text>
          }
          numColumns={2}
          renderItem={({item}) => (
            <PokemonCard pokemon={item} />
            // <FadeInImage
            // uri={item.picture}
            // style={{
            //     width:100,
            //     height:100
            // }}
            // />
          )}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="blue" />
          }
        />
      </View>
      {/* <Text style={{...stylesGlobal.globalMargin, ...stylesGlobal.title, top:top + 20, color:"black"}}>Pokedex</Text> */}
    </>
  );
};

export default HomeScreen;
