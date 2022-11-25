import React from "react";
import { Button, Image, StyleSheet, Text, View } from 'react-native';


export default function ImageArea(){
  return(
    <View>
      <Image source = {{uri:'https://www.seekpng.com/png/detail/109-1095120_art-ghost-by-slhqueenbee-pixel-art-ghost.png'}} style = {{ width: 200, height: 200 }}/>
    </View>
  )
}