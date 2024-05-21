import React from "react";
import { StyleSheet,  Text, View } from "react-native";

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer} >
        <Text style={styles.footerIcon} >App Exemplo</Text>
    </View>
    );

}
const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },

    footerIcon: {
        width: 24,
        height: 24, 
        margin: 10, 
    },
});

export default Footer;