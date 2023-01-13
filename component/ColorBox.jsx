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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorName: {
    backgroundColor: 'inherit',
    backgroundClip: 'text',
    padding: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'transparent',
    filter: 'invert(1) grayscale(1) contrast(50)',
  },
})