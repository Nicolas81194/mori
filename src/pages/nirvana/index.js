import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const image = { uri: 'https://qph.cf2.quoracdn.net/main-qimg-5fd1df880d01765b342154484fbb565b' };

export default function Nirvana() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Mori App</Text>
      </ImageBackground>
      <Animatable.View animation="fadeInUp" style={styles.header}>
        <Text style={styles.text}>Jin Mori - Nirvana</Text>
      </Animatable.View>
      <View>
        <Button
          title="Nirvana"
          color='#000000c0'
          onPress={() => Alert.alert('Você escolheu Jin Mori - Nirvana')}
        />
        <Button
          title="Ir para o Monkey"
          color='#000000c0'
          onPress={() => navigation.navigate('Monkey')}
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