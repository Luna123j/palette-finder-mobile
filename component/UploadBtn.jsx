import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function UploadBtn(){
  return(
    <View style={styles.container}>
      <Button title="Upload Image" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})