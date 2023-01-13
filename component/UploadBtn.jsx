import React from "react";
import { TouchableOpacity,Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function UploadBtn(props){
  return(
    <View>
      <TouchableOpacity onPress={props.onPress} style ={styles.btn} >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    borderRadius: '10',
    elevation: '3',
    backgroundColor: '#14213D',
    marginVertical: '10%',
    width: '100%'
  },
  text:{
    fontSize: '20 pt',
    lineHeight: '21 pt',
    fontWeight: 'bold',
    letterSpacing: '0.25pt',
    color: '#FCA311',
  }
})