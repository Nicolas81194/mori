import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const image = { uri: 'https://i.pinimg.com/originals/1a/ac/31/1aac319b3436706642b278c6433f0e80.png' };

export default function Normal() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Mori App</Text>
      </ImageBackground>
      <Animatable.View animation="fadeInUp" style={styles.header}>
        <Text style={styles.text}>Jin Mori - Normal</Text>
      </Animatable.View>
      <View>
        <Button
          title="Normal"
          color='#000000c0'
          onPress={() => Alert.alert('Você escolheu Jin Mori - Normal')}
        />
        <Button
          title="Ir para o Nirvana"
          color='#000000c0'
          onPress={() => navigation.navigate('Nirvana')}
        />
      </View>
    </View>
  )
}

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