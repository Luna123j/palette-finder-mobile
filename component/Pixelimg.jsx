import React from "react";
import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
import Canvas from 'react-native-canvas';
import { canvasHtml } from "./canvas-html";


export default function Pixelimg(props) {
  const options={imageWidth: props.imgData.width,
    imageHeight: props.imgData.height,imageType:'png'};

    console.log(options);
    console.log (props)
  const pickerCallback = message => {
    if (message && message.nativeEvent && message.nativeEvent.data) {
      console.log(message.nativeEvent.data); // response from ImageColorPicker
    }
  };

  return (
    // <View>
    //   <Image source={canvasHtml(props.imgData.base64,options)} style = {{ width: 200, height: 200 }}/>
    //   {/* <Canvas id={'canvas'}></Canvas> */}
    // </View>
    <WebView
      source={canvasHtml(props.imgData.base64,options)}
	    javaScriptEnabled={true}
      onMessage={event => { pickerCallback(event)}}
    />
  )
}