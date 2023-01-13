import React from "react";
import { TouchableOpacity,Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function UploadBtn(props){
  return(
    <View>
      <TouchableOpacity style ={styles.btn} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    marginVertical: 10
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})