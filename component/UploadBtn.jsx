import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function UploadBtn(){
  return(
    <View style={styles.container}>
      <Pressable style ={styles.btn} >
        <Text style={styles.text}>Upload Image to Start</Text>
      </Pressable>
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