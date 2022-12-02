import React from "react";
import { Button, Image, StyleSheet, Text, View } from 'react-native';


export default function Pixelimg(props){
  
  return(
    <View>
      <Image id={'uploadImg'} source = {props.source} style = {{ width: 200, height: 200 }}/>
    </View>
  )
}