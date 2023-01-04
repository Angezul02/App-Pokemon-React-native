import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';



interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

  const PokemonScreen = ({navigation, route}:Props) => {  
  const {top}= useSafeAreaInsets();
  const {simplePokemon, color}= route.params

    const { isLoading, pokemon} = usePokemon(simplePokemon.id)


  return (
<View style={{flex:1}}>
    <View style={{
      ...styles.containerheader,
      backgroundColor: color     

    }}>
        {/* <Text style={{color:color}}>
          {simplePokemon.name}
          {color}
        </Text> */}

      <TouchableOpacity
      onPress={()=>navigation.pop()}
      activeOpacity={0.8}
      style={{
        ...styles.backButton,
        top:top + 10
        
      }}
      >
          <Icon
          name='arrow-undo-circle'
          size={35}
          style={{opacity:0.3}}
          
          />
          
         
      </TouchableOpacity>
      <Text
          style={{...styles.pokemonName, top: top + 40, textTransform:"capitalize"  }}
          >
            {simplePokemon.name + "\n"}#{simplePokemon.id}
      </Text>
      
          <Image
          source={require("../assets/pokebola-blanca.png")}
          style={styles.pokeball}
          />
          <FadeInImage
          uri={simplePokemon.picture}
          style={styles.pokemonImage}
          />
    </View>

    {/*Detalles y loading*/}

      {
        isLoading 
        ? (
            <View style={styles.loadingIndicator}>
                <ActivityIndicator
                color={color}
                size={50}

                />
            </View>
          )
        : <PokemonDetails
        pokemon={pokemon}
        />
      }

        

</View>
      
    
  )
}

export default PokemonScreen
const styles = StyleSheet.create({
    containerheader:{
      height:370,
      zIndex: 999,
      alignItems:"center",
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius:1000
    },

    backButton:{
      position:"absolute",
      left:20
    }, 

    pokemonName:{
       color:"white", 
       fontSize: 40 , 
       alignSelf: "flex-start", 
       left:20 , 

    }, 

    pokeball:{
      width:250, 
      height:250,
      bottom:-20,
      opacity:0.7
    },

    pokemonImage:{
      width:250,
      height:250,
      position:"absolute", 
      bottom:-18
    }, 
    loadingIndicator:{
      flex:1, 
      justifyContent:"center", 
      alignItems:"center"
    }
});