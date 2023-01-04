import React, {useEffect, useRef, useState} from 'react'
import { View, Text , TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';
import PokemonScreen from '../screen/PokemonScreen';


const windowWidth = Dimensions.get("window").width


interface Props {
    pokemon: SimplePokemon
}

const PokemonCard = ({pokemon}:Props) => {
const [bgColor, setBgColor] = useState("grey")
const isMounted= useRef(true)
const navigation = useNavigation<any>();

useEffect(() => {
 ImageColors.getColors(pokemon.picture, {fallback:bgColor} )
    .then(colors=>{
        if(!isMounted.current)
        return;

    if(colors.platform === "android" )
        setBgColor( colors.dominant || bgColor)
    else if(colors.platform === "ios")
        setBgColor( colors.background || bgColor)
})

return ()=>{
    isMounted.current = false;
}
}, [])


      

  return (
   <TouchableOpacity
   activeOpacity={0.8}
   onPress={()=>navigation.navigate("PokemonScreen", {simplePokemon:pokemon, color:bgColor})}
   >
        <View
        style={{...styles.cardContainer, 
        width:windowWidth * 0.4,
        backgroundColor:bgColor
        }}
        >
            {/* //Nombre del pokemon */}
            <View>
                <Text
                style={{
                ...styles.name, 
                textTransform: "capitalize"
                }}>
                    {pokemon.name}
                    {'/n#' + pokemon.id}
                </Text>
            </View>
            <View style={styles.pokebolaContainer}>
                <Image
                source={require("../assets/pokebola-blanca.png")}
                style={styles.pokebolaCard}
                />
            </View>

            <FadeInImage
                uri={pokemon.picture}
                style={styles.pokemonImage}

            
            />

        </View>
   </TouchableOpacity>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        // backgroundColor:"blue",
        height:120, 
        width:150,
        marginBottom:25, 
        borderRadius:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        

    },
    name:{
        color:"white", 
        fontSize: 18, 
        fontWeight:"bold",
        top:8, 
        left:10, 
        
    }, 

    pokebolaCard:{
        width:100, 
        height:100, 
        position:"absolute", 
        right:-10,
        bottom:-20,

        
    }, 
    pokemonImage:{
        width:110,
        height: 110, 
        position:"absolute", 
        right:-8,
        bottom:-6,
        

    },
    pokebolaContainer:{
        
        width:100,
        height:100,
        position:"absolute", 
        bottom:0,
        right:0, 
        overflow:"hidden",
        opacity: 0.5
    }
});