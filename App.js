import { useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Platform, PermissionsAndroid } from 'react-native';
import ImageArea from './component/ImageArea';
import UploadBtn from './component/UploadBtn';
import * as ImagePicker from 'expo-image-picker'
import GetPalette from './component/GetPalette';


export default function App() {

  const [filepath, setFilepath] = useState({ uri: require('./assets/upload.jpg') });
  const imgRef = useRef(null)
  const [imgData, setImgData] = useState({})
  const [retake, setRetake] = useState(true)
  const height = filepath.height
  const width = filepath.width

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

  const createPixelArt = () => {


    setImgData({ base64: filepath.base64 })
  }

  const createPallete = () => {
    setImgData({ base64: filepath.base64 })
    setRetake(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {retake ?
        <Image source = {{ uri: filepath.uri }} style = {{ width: '80%', height: '50%',resizeMode:'contain' }} />
        :
        <GetPalette imgData={filepath} />
      }

      {filepath.uri == require('./assets/upload.jpg') ?
        <View>
          <UploadBtn onPress={chooseFile} text={"Choose image"} />
          <UploadBtn onPress={openCamera} text={"Take photo"} />
        </View>
        :
        <View>
          <UploadBtn onPress={createPallete} text={"create pallete"} />
          <UploadBtn onPress={chooseFile} text={"retake image"} />
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height:'100%'
  },
});
