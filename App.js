import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native';
import ImageArea from './component/ImageArea';
import UploadBtn from './component/UploadBtn';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const [filepath, setFilepath] = useState({ uri: 'https://www.seekpng.com/png/detail/109-1095120_art-ghost-by-slhqueenbee-pixel-art-ghost.png' });

  const chooseFile = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setFilepath({uri:result.assets[0].uri});
    };
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.canceled) {
      setFilepath({uri:result.assets[0].uri});
      console.log(result.assets[0].uri);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>choose image</Text>
      <ImageArea source={{ uri: filepath.uri }} />
      <UploadBtn onPress={chooseFile} text={"Choose image from library"} />
      <UploadBtn onPress={openCamera} text={"Take photo"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
