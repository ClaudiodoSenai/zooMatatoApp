import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer}>

        <TouchableOpacity>
                <Image
                    source={require('../assets/images/menu.png')}
                    style={styles.footerIcon}
                />
                </TouchableOpacity>
                
            <TouchableOpacity >
                <Image
                    source={require('../assets/images/home.png')}
                    style={styles.footerIcon}

                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/images/profile.png')}
                    style={styles.footerIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../assets/images/lupa.png')}
                    style={styles.footerIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fefae0', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        },
    footerIcon: {
        width: 24,
        height: 24, 
        margin: 10, 
    },
});

export default Footer;
