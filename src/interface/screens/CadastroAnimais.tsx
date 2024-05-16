import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import axios from 'axios';

const CadastroAnimal = () => {
    const [animais, setAnimais] = useState<Animal[]>([]);
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [especie, setEspecie] = useState<string>('');
    const [ra, setRa] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [sexo, setSexo] = useState<string>('');
    const [dieta, setDieta] = useState<string>('');
    const [habitat, setHabitat] = useState<string>('');

    const logo = require('../assets/images/logo.png');

    const cadastrarAnimal = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('idade', idade);
            formData.append('especie', especie);
            formData.append('ra', ra);
            formData.append('peso', peso);
            formData.append('altura',altura);
            formData.append('sexo', sexo);
            formData.append('dieta', dieta);
            formData.append('habitat', habitat);
           
            const response = await axios.post('http://10.137.11.225:8000/api/animal/cadastrar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
        

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="#ffdab9" barStyle="light-content" />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.form}>
                <Text style={styles.fText}>Cadastro de Animais</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Animal"
                    value={nome}
                    onChangeText={setNome} />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    value={String(idade)}
                    onChangeText={setIdade} />
                <TextInput
                    style={styles.input}
                    placeholder="Espécie"
                    value={especie}
                    onChangeText={setEspecie} />
                <TextInput
                    style={styles.input}
                    placeholder="RA"
                    value={ra}
                    onChangeText={setRa} />
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    value={peso}
                    onChangeText={setPeso} />
                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    value={(altura)}
                    onChangeText={setAltura} />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                    value={sexo}
                    onChangeText={setSexo} />
                <TextInput
                    style={styles.input}
                    placeholder="Dieta"
                    value={dieta}
                    onChangeText={setDieta} />
                <TextInput
                    style={styles.input}
                    placeholder="Habitat"
                    value={habitat}
                    onChangeText={setHabitat} />
               
                <TouchableOpacity style={styles.imageButton} onPress={cadastrarAnimal}>
                    <Text style={styles.imageButtonText}>Cadastrar Animal</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#ffdab9',
        paddingVertical: 10,
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 100,
    },
    form: {
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    imageButton: {
        backgroundColor: '#ffdab9',
        padding: 10,
        borderRadius: 5,
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
        paddingVertical: 10,
    },
    footer: {
        borderTopWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
});


export default CadastroAnimal;
