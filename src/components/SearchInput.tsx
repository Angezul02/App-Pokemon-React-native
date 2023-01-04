import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Platform, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebounceValue from '../hooks/useDebounceValue';
import { useEffect } from 'react';


interface Props {
    style?:StyleProp<any>,
    onDebounced?:(value:string)=>void,
    
}

const SearchInput = ({style, onDebounced}:Props) => {

    const [textValue, setTextValue] = useState("")

    const debouncedValue = useDebounceValue(textValue)

    useEffect(() => {
        onDebounced!(debouncedValue)
     
    }, [debouncedValue])
    

  return (
    <View style={{...styles.container, ...style as any}}>
        <View style={styles.textBackground}>
            <TextInput
                placeholder='Buscar Pokémon'
                autoCapitalize="none"
                autoCorrect={false}
                style={
                    {...styles.textInput, top:(Platform.OS==="ios"?0:2)}
                }
                value={textValue}
                onChangeText={setTextValue}
            />

            <Icon            
                name="search-circle-outline"
                color="grey"
                style={{opacity:0.6}}
                size={30}
            />
            

           

        </View>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    textBackground:{
        backgroundColor:"#f3f1f3", 
        borderRadius:40, 
        height:40, 
        paddingHorizontal:20, 
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "row", 
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,



    }, 
    textInput:{
        flex:1, 
        fontSize:18,
        
    }
});