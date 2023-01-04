import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {PokemonFullInformation, Type} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFullInformation;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject,  marginBottom:50}} showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 400}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.regularText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.title}>Weight</Text>
          <Text style={styles.regularText}>{pokemon.weight} hg </Text>

          <Text style={styles.title}>Height</Text>
          <Text style={styles.regularText}>{pokemon.height} dc </Text>
        </View>
        <View>
          <Text style={styles.title}>Sprites</Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />
        </ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Abilities</Text>
          <View style={{flexDirection: 'row'}}>
            {pokemon.abilities.map(ability => (
              <Text style={styles.regularText} key={ability.ability.name}>
                {ability.ability.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Movements</Text>
        <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
            {pokemon.moves.map(moves => (
              <Text style={{...styles.regularText}} key={moves.move.name}>
                {moves.move.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View >
            {pokemon.stats.map((stats, i )=> (
                <View key={stats.base_stat + i} style={{flexDirection:"row"}}>
                    <Text style={{...styles.regularText, marginRight:10, width:160}}>
                        {stats.stat.name}
                    </Text>
                    <Text style={{...styles.regularText, fontWeight:"bold"}} >
                        {stats.base_stat}
                    </Text>
                </View>
            ))}
          </View>
        </View>
        <View style={{marginBottom:20, alignItems:"center"}}>
            <FadeInImage
                uri={pokemon.sprites.front_default}
                style={styles.basicSprite}
            />
        </View>
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 20,
  },
  regularText: {
    fontSize: 20,
    textTransform: 'capitalize',
    marginRight: 10,
  },

  basicSprite: {
    width: 100,
    height: 100,
  },

  //   scrollSprites:{
  //     flexDirection:"row"
  //   }
});
