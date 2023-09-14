import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const image = { uri: 'https://static.wikia.nocookie.net/liberproeliis/images/f/fa/Jin_Mo-Ri-1.png/revision/latest?cb=20171224214422&path-prefix=pt-br' };

export default function Monkey() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Mori App</Text>
      </ImageBackground>
      <Animatable.View animation="fadeInUp" style={styles.header}>
        <Text style={styles.text}>Jin Mori - Monkey King</Text>
      </Animatable.View>
      <View>
        <Button
          title="Monkey King"
          color='#000000c0'
          onPress={() => Alert.alert('Você escolheu Jin Mori - Monkey King')}
        />
        <Button
          title="Ir para o Hui Mori"
          color='#000000c0'
          onPress={() => navigation.navigate('Hui')}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  header: {
    backgroundColor: '#000000c0',
    height: 100,
    justifyContent: 'center',
  },
});