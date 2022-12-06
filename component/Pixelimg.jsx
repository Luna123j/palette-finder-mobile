import React from "react";
import { Button, Image, StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Canvas from 'react-native-canvas';


export default function Pixelimg(props){
  const quantization =()=>{

  }

  return(
    <View>
      <Image source={{ uri: 'data:image/jpeg;base64,' + props.imgData }} style = {{ width: 200, height: 200 }}/>
      {/* <Canvas id={'canvas'}></Canvas> */}
    </View>
  )
}