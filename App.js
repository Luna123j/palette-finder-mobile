import {  useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native';
import UploadBtn from './component/UploadBtn';
import * as ImagePicker from 'expo-image-picker'
import GetPalette from './component/GetPalette';


export default function App() {

  const [filepath, setFilepath] = useState({ uri: require('./assets/upload.jpg') });
  const [imgData, setImgData] = useState({})
  const [retake, setRetake] = useState(true)

  const chooseFile = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });


    if (!result.canceled) {
      setFilepath({ uri: result.assets[0].uri, base64: result.assets[0].base64, width: result.assets[0].width, height: result.assets[0].height });
      setRetake(true);
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
      setFilepath({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    }
  }


  const createPallete = () => {
    setImgData({ base64: filepath.base64 })
    setRetake(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {retake ?
        <Image source={{ uri: filepath.uri }} style={[styles.image,{ width: '80%', height: '50%', resizeMode: 'contain'}]} />
        :
        <GetPalette imgData={filepath} />
      }

      {filepath.uri == require('./assets/upload.jpg') ?
        <View>
          <UploadBtn onPress={chooseFile} text={"Choose Image"} />
          <UploadBtn onPress={openCamera} text={"Take Photo"} />
        </View>
        :
        <View>
          {retake ?
            <UploadBtn onPress={createPallete} text={"Create Pallete"} />
            : ""}
          <UploadBtn onPress={chooseFile} text={"Retake Image"} />
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#EAE2B7',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%', 
    width: '100%',
    borderColor: '#FB5607',
    borderStyle: 'dashed',
    borderLeftWidth:'2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderRightWidth:'2px',
    borderRadius: 1
  },

  image: {
    borderColor: '#3A86FF',
    borderStyle: 'dashed',
    borderLeftWidth:'4px',
    borderTopWidth: '4px',
    borderBottomWidth: '4px',
    borderRightWidth:'4px',
    borderRadius: 2,
    backgroundColor: '#E5E5E5'
  }
});
