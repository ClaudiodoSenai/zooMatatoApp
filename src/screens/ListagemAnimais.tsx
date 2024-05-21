import React, { useState, useEffect } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';

interface Animal {
    id: string;
    nome: string;
    idade: string;
    especie: string;
    ra: string;
    peso: number;
    altura: number;
    sexo: string;
    dieta: string;
    habitat: string;
}


const Cardapio = () => {
    const [dados, setDados] = useState<Animal[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Animal[]>('http://10.137.11.225:8000/api/animal/todos');
                console.log('Dados recebidos da API:', response.data);
                setDados(response.data);
                console.log("dados da api" + dados);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
                setError("Ocorreu um erro ao buscar os bolos");
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Animal }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.text}>
                        <Text style={styles.tituloBolos}>{item.nome}</Text>
                        <Text style={styles.preco}>Idade: {item.idade}</Text>
                        <Text style={styles.textColor}>Espécie: {item.especie}</Text>
                        <Text>RA: {item.ra}</Text>
                        <Text>Peso: {item.peso} kg</Text>
                        <Text>Altura: {item.altura} cm</Text>
                        <Text>Sexo: {item.sexo}</Text>
                        <Text>Dieta: {item.dieta}</Text>
                        <Text>Hábitat: {item.habitat}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>

            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#feedc6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#ffdab9',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    image: {
        width: 130,
        height: 100,
        marginRight: 25
    },
    textColor: {
        fontWeight: 'bold',
        color: 'black'
    },
    logo: {
        width: 130,
        height: 100
    },
    text: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tituloBolos: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    preco: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: 'yellow',
        borderRadius: 10
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
    },
   


});

export default Cardapio;