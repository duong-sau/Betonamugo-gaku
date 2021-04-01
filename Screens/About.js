import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
let G;
export default class About extends Component {
    constructor(props) {
        super(props)
        G = this;

    }
    render() {
        return (
            <View>
                <View style={styles.style}>
                    <TouchableOpacity
                        onPress={() =>
                            G.props.navigation.dispatch(DrawerActions.openDrawer())
                        }>
                        <Icon
                            name="bars"
                            color="white"
                            size={30}
                            style={{ marginLeft: 20, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Thông tin ứng dụng</Text>
                </View>
                <View style={{ backgroundColor: "white", height: 180 }}>
                    <View>
                        <Image style={styles.image} source={require('../src/mrfox.png')} />
                    </View>
                    <View >
                        <Text style={styles.content}>FOXENGLISH</Text>
                    </View></View>
                <View style={{ backgroundColor: "white", marginTop: 10 }}>
                    <View style={{
                        backgroundColor: "white", marginTop: 30,
                        color: "red", height: 20, borderBottomWidth: 1, borderBottomColor: "#c0c0c0"
                    }}>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -17 }}>Version                                                   1.0</Text>
                    </View>
                    <View style={{
                        backgroundColor: "white", marginTop: 30,
                        color: "red", height: 20, borderBottomWidth: 1, borderBottomColor: "#c0c0c0"
                    }}>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -17 }}>Release year                                       2020</Text>
                    </View>
                    <View style={{
                        backgroundColor: "white", marginTop: 30,
                        color: "red", height: 20, borderBottomWidth: 1, borderBottomColor: "#c0c0c0"
                    }}>
                        <Text style={{ fontSize: 20, marginLeft: 20, marginTop: -17 }}>Operating System                           Android</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, marginLeft: 40 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 17, color: "#a0a0a0" }}>Phát triển bới sinh viên đại học Công nghệ</Text>
                        <Text style={{ fontSize: 17, color: "#a0a0a0", marginLeft:60 }}> Đại học quốc gia Hà Nội</Text>
                        <Text style={{
                            fontSize: 16, marginLeft: -15,
                            marginTop: 30, color: "#a0a0a0"
                        }}>144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà
Nội</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    style: {
        backgroundColor: "rgb(60,179,113)",
        width: "100%",
        height: 50,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginLeft: 150
    },
    content: {
        fontSize: 20,
        marginLeft: 140,
        marginTop: 10,
        color: "rgb(60,179,113)",
        fontWeight: "bold"
    },
    text: {
        color: "white",
        fontSize: 20,
        marginTop: -29,
        marginLeft: 60,
    }
});