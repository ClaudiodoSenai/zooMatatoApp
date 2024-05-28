import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from "react-native";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CommonActions, useNavigation } from "@react-navigation/native";

const EditarAnimais = ({ route }: { route: any }) => {
    const navigation = useNavigation();
    const { animal } = route.params;
    const [nome, setNome] = useState(animal.nome);
    const [idade, setIdade] = useState(animal.idade);
    const [especie, setEspecie] = useState(animal.especie);
    const [ra, setRa] = useState(animal.ra);
    const [peso, setPeso] = useState(String(animal.peso));
    const [altura, setAltura] = useState(String(animal.altura));
    const [sexo, setSexo] = useState(animal.sexo);
    const [dieta, setDieta] = useState(animal.dieta);
    const [habitat, setHabitat] = useState(animal.habitat);
    const [updateSuccess, setUpdateSuccess] = useState(false); 

    useEffect(() => {
        if (updateSuccess) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Listagem' }],
                })
            );
        }
    }, [updateSuccess]);

    const salvarAlteracoes = async () => {
        try {
            await axios.post(`http://10.137.11.225/ZooMatato/public/api/animal/atualizar/${animal.id}`, {
                nome,
                idade,
                especie,
                ra,
                peso: parseFloat(peso),
                altura: parseFloat(altura),
                sexo,
                dieta,
                habitat,
            });
            setUpdateSuccess(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Header />
                <View style={styles.form}>
                    <Text style={styles.fText}>Editar Animal</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Animal"
                        onChangeText={setNome}
                        value={nome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        onChangeText={setIdade}
                        value={idade}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Espécie"
                        onChangeText={setEspecie}
                        value={especie}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="RA"
                        onChangeText={setRa}
                        value={ra}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Peso em Kg"
                        onChangeText={setPeso}
                        value={peso}
                        keyboardType="decimal-pad"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Altura em Cm"
                        onChangeText={setAltura}
                        value={altura}
                        keyboardType="decimal-pad"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Sexo"
                        onChangeText={setSexo}
                        value={sexo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dieta"
                        onChangeText={setDieta}
                        value={dieta}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Habitat"
                        onChangeText={setHabitat}
                        value={habitat}
                    />
                    <TouchableOpacity style={styles.imageButton} onPress={salvarAlteracoes}>
                        <Text style={styles.imageButtonText}>Salvar Alterações</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        padding: 10,
        backgroundColor: '#ccd5ae',
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fefae0'
    },
    imageButton: {
        backgroundColor: '#606c38',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    fText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 'auto',
    },
});

export default EditarAnimais;
