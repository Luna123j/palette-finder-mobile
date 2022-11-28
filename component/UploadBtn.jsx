import React from "react";
import { TouchableOpacity,Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function UploadBtn(props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style ={styles.btn} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})