import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ColorBox (props) {
  return (
    <View
      style={[
        styles.box,
        {
          backgroundColor: props.value,
        },
      ]}
    >
      <Text style={styles.colorName}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorName: {
    backgroundColor: 'transparent',
    padding: 4,
    fontSize: 18,
  },
})