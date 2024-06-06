import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from "react-native";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const CadastroAnimal = () => {
    const [nome, setNome] = useState<string>('');
    const [idade, setIdade] = useState<string>('');
    const [especie, setEspecie] = useState<string>('');
    const [ra, setRa] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [sexo, setSexo] = useState<string>('');
    const [dieta, setDieta] = useState<string>('');
    const [habitat, setHabitat] = useState<string>('');

    const navigation = useNavigation(); // Hook para navegação

    const validarCampos = () => {
        if (!nome ||!idade ||!especie ||!ra ||!peso ||!altura ||!sexo ||!dieta ||!habitat) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return false;
        }
        return true;
    };

    const cadastrarAnimal = async () => {
        if (!validarCampos()) {
            return; // Sai da função se a validação falhar
        }

        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('idade', idade);
            formData.append('especie', especie);
            formData.append('ra', ra);
            formData.append('peso', peso);
            formData.append('altura', altura);
            formData.append('sexo', sexo);
            formData.append('dieta', dieta);
            formData.append('habitat', habitat);

            const response = await axios.post('http://10.137.11.225/ZooMatato/public/api/animal/cadastrar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                Alert.alert("Sucesso", "Animal cadastrado com sucesso!");
                navigation.navigate('Listagem'); // Redireciona para a tela de listagem
            } else {
                Alert.alert("Erro", "Não foi possível cadastrar o animal. Por favor, tente novamente.");
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível cadastrar o animal. Por favor, tente novamente.");
        }
    }

    return (
       <View style={styles.container}>
        <ScrollView>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Header />
            <View style={styles.form}>
                <Text style={styles.fText}>Cadastro de Animais</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Animal"
                    onChangeText={setNome} />
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    onChangeText={setIdade} />
                <TextInput
                    style={styles.input}
                    placeholder="Espécie"
                    onChangeText={setEspecie} />
                <TextInput
                    style={styles.input}
                    placeholder="RA"
                    onChangeText={setRa} />
                <TextInput
                    style={styles.input}
                    placeholder="Peso em Kg"
                    keyboardType="decimal-pad"
                    onChangeText={setPeso} />
                <TextInput
                    style={styles.input}
                    placeholder="Altura em Cm"
                    keyboardType="decimal-pad"
                    onChangeText={setAltura} />
                <TextInput
                    style={styles.input}
                    placeholder="Sexo"
                    onChangeText={setSexo} />
                <TextInput
                    style={styles.input}
                    placeholder="Dieta"
                    onChangeText={setDieta} />
                <TextInput
                    style={styles.input}
                    placeholder="Habitat"
                    onChangeText={setHabitat} />

                <TouchableOpacity style={styles.imageButton} onPress={cadastrarAnimal}>
                    <Text style={styles.imageButtonText}>Cadastrar Animal</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
          <Footer />
</View>
    );
}

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

export default CadastroAnimal;
