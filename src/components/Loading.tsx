import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.activityContainer}>
            
        <ActivityIndicator
            size={50}
            color="#5856D6"

        />
        <Text>
            Cargando...
        </Text>
        </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    activityContainer:{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    }
});