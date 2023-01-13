import React from "react";
import { Button, Image, StyleSheet, Text, View,SafeAreaView } from 'react-native';


export default function ImageArea(props){
  

  return(
    <View>
      <Image id={'uploadImg'} source = {props.source.uri ? props.source : ""} style = {{aspectRatio: 1/1 }}/>
    </View>
  )
}