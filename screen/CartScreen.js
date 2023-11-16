import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TouchableOpacity style={styles.back}>
        <Image
          source={require('../assets/Arrow1.png')} />
      </TouchableOpacity>
      <Text style={styles.yourcart}>Your Cart 👍🏻</Text>
      <View>
        <View style={styles.item}>
          <Image
            source={require('../assets/Rectangle31.png')} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: '#B1B1B1', fontWeight: 'bold' }}>Lauren's</Text>
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>Orange Juice</Text>
            <Text style={{ color: '#F08F5F', fontWeight: 'bold' }}>₹ 149</Text>
          </View>
          <View style={styles.number}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group162.png')} />
            </TouchableOpacity>
            <Text>2</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group3.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/Rectangle32.png')} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: '#B1B1B1', fontWeight: 'bold' }}>Bakins's</Text>
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>Skimmed Milk</Text>
            <Text style={{ color: '#F08F5F', fontWeight: 'bold' }}>₹ 129</Text>
          </View>
          <View style={styles.number}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group162.png')} />
            </TouchableOpacity>
            <Text>2</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group3.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../assets/Rectangle45.png')} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: '#B1B1B1', fontWeight: 'bold' }}>Marley's</Text>
            <Text style={{ color: '#000000', fontWeight: 'bold' }}>Aloe Vera Lotion</Text>
            <Text style={{ color: '#F08F5F', fontWeight: 'bold' }}>₹ 1249</Text>
          </View>
          <View style={styles.number}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group162.png')} />
            </TouchableOpacity>
            <Text>2</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/Group3.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.total}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F08F5F' }}>₹ 1527</Text>
        </View>
        <TouchableOpacity style={styles.checkout}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:50,
    paddingLeft:37

  },
  back: {
    width: 45,
    height: 45,
    backgroundColor: '#F8F8FB',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  yourcart: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 34,
    marginBottom: 48,
  },
  item: {
    width: 335,
    height: 85,
    backgroundColor: '#F8F8FB',
    marginBottom: 25,
    paddingLeft: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    width: 70,
    height: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 10,
    right: 14,
    bottom: 14
  },
  total: {
    width: 335,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 11,
    marginBottom: 36
  },
  checkout: {
    width: 335,
    height: 62,
    backgroundColor: '#F08F5F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})