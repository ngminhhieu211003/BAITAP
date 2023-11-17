import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={{borderRadius:150}}
                source={require('../assets/splash1.png')} />
            <Text style={{fontSize: 22, fontWeight:'bold',marginTop:55,marginBottom:22}}>Scan, Pay & Enjoy!</Text>
            <Text style={{width:272,textAlign:'center',fontSize:16}}>scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!</Text>
            <Image style={{marginTop:140}}
                source={require('../assets/Group169.png')} />
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        paddingTop:140
    }
})