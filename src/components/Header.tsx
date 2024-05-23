import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


function Header(): React.JSX.Element {

    const logo = require('../assets/images/logo.png');

    return (
        <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>
    )
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
      header: {
        backgroundColor: '#606c38',
        paddingVertical: 10,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 130,
    },
});

export default Header;
