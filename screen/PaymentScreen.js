import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle15}></View>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    rectangle15:{
        height:255,
        backgroundColor:'l',
        
    }
})