import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

export default function App() {
    return(
        <View style={styles.container}>

          <Image source={require('./src/assets/spotify_icon.png')}
                 style={styles.icon}/>
         
            <TouchableOpacity style={styles.buttonFree}> 
                 <Text styles={styles.textFree}>Continuar com um número de telefone</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonTel} onPress={()=>{}}>
                 <Text>Continuar com um número de telefone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFace} onPress={()=>{}}>
                 <Text>Continue with Facebook</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#112',
        flex: 1,
        alignItems: 'center',
        margin: 50,
    },
    buttonFree:{
        alignItems: 'center',
        backgroundColor: '#1cd463',
        borderRadius: 20,
        padding: 10,
        width: 300,
        marginTop: 300,
    },
    textFree:{
        color: '#555',
        fontSize: 17,
        alignItems: 'center'
    },
    buttonTel:{
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        width: 300,
        marginTop: 350,
    },
    buttonFace:{
        alignItems: 'center',
        backgroundColor: '#112',
        borderCOlor: 'gray',
        borderRadius: 20,
        padding: 10,
        width: 300,
        marginTop: 400, 
    },
    icon:{
        width: 250,
        height: 100,
        marginTop: 90,
    }
});