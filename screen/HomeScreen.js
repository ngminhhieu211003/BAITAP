import { Image, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    const productList = [
        { id: '1',image: require('../assets/Rectangle31.png') },
        { id: '2',image: require('../assets/Rectangle45.png') },
        { id: '3',image: require('../assets/Rectangle45(1).png') },
    ];
    const renderProductItem = ({ item }) => (
        <View style={styles.productItem}>
            <Image source={item.image} style={{width:127,height:125,borderRadius:20,marginRight:25}} />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.maskgroup}>
                <View>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Hello 👋🏻</Text>
                    <Text>Christie Doe</Text>
                </View>
                <Image style={{ borderRadius: 150 }}
                    source={require('../assets/Ellipse6.png')} />
            </View>
            <Text style={{ fontSize: 18, marginTop: 40, marginBottom: 20 }}>Your Insights</Text>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Image
                        source={require('../assets/Group157.png')} />
                    <Text style={{ marginVertical: 5, fontSize: 18 }}>Scan new</Text>
                    <Text style={{ fontSize: 10, color: '#B7B7C1' }}>Scanned 483</Text>
                </View>
                <View style={styles.item}>
                    <View style={[styles.group, styles.group1]}>
                        <Image
                            source={require('../assets/Frame.png')} />
                    </View>
                    <Text style={{ marginVertical: 5, fontSize: 18 }}>Counterfeits</Text>
                    <Text style={{ fontSize: 10, color: '#B7B7C1' }}>Counterfeited 32</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <View style={[styles.group, styles.group2]}>
                        <Image
                            source={require('../assets/Group158.png')} />
                    </View>
                    <Text style={{ marginVertical: 5, fontSize: 18 }}>Success</Text>
                    <Text style={{ fontSize: 10, color: '#B7B7C1' }}>Checkouts 8</Text>
                </View>
                <View style={styles.item}>
                    <View style={[styles.group, styles.group3]}>
                        <Image
                            source={require('../assets/Group151.png')} />
                    </View>
                    <Text style={{ marginVertical: 5, fontSize: 18 }}>Directory</Text>
                    <Text style={{ fontSize: 10, color: '#B7B7C1' }}>History 26</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 50, marginBottom:30, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Explore More</Text>
                <Image
                    source={require('../assets/Arrow2.png')} />
            </View>
            <View style={styles.produce}>
                <FlatList
                    data={productList}
                    keyExtractor={(item) => item.id}
                    renderItem={renderProductItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        paddingTop: 31
    },
    maskgroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    group: {
        height: 55,
        width: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    group1: {
        backgroundColor: '#F6E3DB'
    },
    group2: {
        backgroundColor: '#D8F3F1'
    },
    group3: {
        backgroundColor: '#D0EDFB'
    },
    item: {
        width: 170,
        height: 176,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FB',
        borderRadius: 20
    }
})