import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './FirebaseConnection';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.state = {
            login: '',
            senha: ''
        }


        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                this.props.navigation.navigate('Principal');
            }
        });
        this.click = this.click.bind(this);
    }


    click() {
        firebase.auth().signInWithEmailAndPassword(
            this.state.login,
            this.state.senha
        ).catch((error) => {
            if (error.code == 'auth/wrong-password') {
                alert('Senha errada !')
            } else {
                alert('Tente mais tarde !')
            }
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textoLogo}>
                    <Text style={styles.txt1}>
                        RCS
            </Text>
                    <Text style={styles.txt2}>
                        Risk Calculation System
            </Text> 
                </View>

                <TextInput onChangeText={(login) => this.setState({ login })} style={styles.input} placeholder='Login...' />
                <TextInput onChangeText={(senha) => this.setState({ senha })} style={styles.input} secureTextEntry={true} placeholder='Senha...' />
                <TouchableOpacity onPress={this.click} style={styles.btn}>
                    <Text style={styles.texto}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        marginTop: 10,
        marginLeft: 250
    },
    texto: {
        color: "#000000"
    },
    textoLogo: {
        fontSize: 25,
        marginBottom: 40
    },
    input: {
        width: 300,
        backgroundColor: "#DCDCDC",
        marginTop: 10
    },
    txt1:{
        fontSize:60,
        marginRight:10
    },
    txt2:{
        fontSize: 10,
        marginRight:10
    }


});
