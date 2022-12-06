import { useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native';
import ImageArea from './component/ImageArea';
import UploadBtn from './component/UploadBtn';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const [filepath, setFilepath] = useState({ uri: "" });
  const imgRef = useRef('uploadImg')
  const [imgData, setImgData] = useState()

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


    if (!result.canceled) {
      setFilepath({ uri: result.assets[0].uri });
    };
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setFilepath({ uri: result.assets[0].uri });
    }
  }

  const createPixelArt = () => {

  }

  const createPallete = () => {
    const img = imgRef.current;
    if (!img?.width) {
      return;
    }
    const { width, height } = img;
    const canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    const context = canvas.getContext?.("2d");
    if (context === null) {
      return;
    }
    context.drawImage(img, 0, 0);
    const imageData = context.getImageData(0, 0, width, height);
    console.log(`Image Data`, imageData);
    setImgData(imageData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>choose image</Text>
      {imgData ?
        <Pixelimg source={{ uri: filepath.uri }} imgData={imgData} />
        :
        <ImageArea source={{ uri: filepath.uri }} />
      }
      {filepath.uri ?
        <>
          <UploadBtn onPress={createPixelArt} text={"create pixel art"} />
          <UploadBtn onPress={createPallete} text={"create pallete"} />
          <UploadBtn onPress={chooseFile} text={"retake image"} />
        </>
        :
        <>
          <UploadBtn onPress={chooseFile} text={"Choose image from library"} />
          <UploadBtn onPress={openCamera} text={"Take photo from Camera"} />
        </>}

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
