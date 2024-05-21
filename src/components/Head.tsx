import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Head(): React.JSX.Element {
    return (
        <View style={styles.header} >
            <Text style={styles.headerText} >App Exemplo</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
    

});

export default Head;