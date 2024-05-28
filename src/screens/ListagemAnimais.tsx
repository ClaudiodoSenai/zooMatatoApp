import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

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

const ListagemAnimal = () => {
    const [dados, setDados] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://10.137.11.225:8000/api/animal/todos');
            console.log('Dados recebidos da API:', response.data);
            setDados(response.data.data);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
            setError("Ocorreu um erro ao buscar os animais");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deletarAnimal = async (id: string) => {
        try {
            await axios.delete(`http://10.137.11.225:8000/api/animal/excluir/${id}`);
            Alert.alert("Sucesso!", "Animal deletado com sucesso.");
            fetchData(); 
        } catch (error) {
            console.error(error);
            Alert.alert("Erro!", "Ocorreu um erro ao deletar o animal.");
        }
    };

    const navigation = useNavigation();

    const editarAnimais = (animal: Animal)=>{
        navigation.navigate('EditarAnimais', {animal});
    }




    const renderItem = ({ item }: { item: Animal }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.text}>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.idade}>Idade: {item.idade}</Text>
                        <Text style={styles.text}>Espécie: {item.especie}</Text>
                        <Text style={styles.text}>RA: {item.ra}</Text>
                        <Text style={styles.text}>Peso: {item.peso} kg</Text>
                        <Text style={styles.text}>Altura: {item.altura} cm</Text>
                        <Text style={styles.text}>Sexo: {item.sexo}</Text>
                        <Text style={styles.text}>Dieta: {item.dieta}</Text>
                        <Text style={styles.text}>Habitat: {item.habitat}</Text>

                        <View style ={styles.actions}>
                            <TouchableOpacity onPress={() => editarAnimais(item)}>
                            <Image source={require('../assets/images/update.png')} style={styles.updateIcon} />  
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deletarAnimal(item.id)}>
                            <Image source={require('../assets/images/delete.png')} style={styles.deleteIcon} />
                        </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <Header />
            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Footer />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#606c38',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    nome: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    idade: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 8,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    deleteIcon: {
        width: 30, 
        height: 30, 
        marginRight: 10, 
    },
    updateIcon: {
        width: 30, 
        height: 30, 
        marginRight: 10, 
    }

});

export default ListagemAnimal;