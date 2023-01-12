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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
})