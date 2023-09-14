import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const image = { uri: 'https://static.wikia.nocookie.net/vsbattles/images/7/7e/Mori_Hui_Render.png/revision/latest?cb=20201008064836' };

export default function Hui() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Mori App</Text>
            </ImageBackground>
            <Animatable.View animation="fadeInUp" style={styles.header}>
                <Text style={styles.text}>Hui Mori</Text>
            </Animatable.View>
            <View>
                <Button
                    title="Hui Mori"
                    color='#000000c0'
                    onPress={() => Alert.alert('Você escolheu Hui Mori')}
                />
                <Button
                    title="Ir para o Dan Mori"
                    color='#000000c0'
                    onPress={() => navigation.navigate('Dan')}
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