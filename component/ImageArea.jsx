import React from "react";
import { Button, Image, StyleSheet, Text, View,SafeAreaView } from 'react-native';


export default function ImageArea(props){
  

  return(
    <View>
      <Image id={'uploadImg'} source = {props.source.uri ? props.source : require('../assets/upload.jpg')} style = {{ width: 200, height: 200 }}/>
    </View>
  )
}