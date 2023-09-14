import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'
const image = { uri: 'https://i.pinimg.com/1200x/f1/a4/fb/f1a4fbe7c7082c9a0e19f0309c93cd2f.jpg' };

export default function Dan() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Mori App</Text>
            </ImageBackground>
            <Animatable.View animation="fadeInUp" style={styles.header}>
        <Text style={styles.text}>Dan Mori</Text>
      </Animatable.View>
            <View>
                <Button
                    title="Dan Mori"
                    color='#000000c0'
                    onPress={() => Alert.alert('Você escolheu Dan Mori')}
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