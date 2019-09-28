import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import firebase from './FirebaseConnection';




export default class Dispositivo extends Component {
    static navigationOptions = {
        title: 'Informações do fabricante'
    }

    constructor(props) {
        super(props);
        this.state = {
            dispositivo: '',
            nome: '',
            descricao: '',
            modelo: '',
            certificado: '',
            dataValidade: '',
            tensaoEmV: '',
            potenciaEmMW: '',
            correnteEmMA: '',
            capacitanciaEmNF: '',
            indutânciaEmMH: '',
            protecao: ''
        }


        firebase.database().ref('id').child('idProduto').once('value').then((snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            state.descricao = snapshot.val().descricao;
            state.modelo = snapshot.val().modelo;
            state.certificado = snapshot.val().certificado;
            state.dataValidade = snapshot.val().dataValidade;
            state.tensaoEmV = snapshot.val().tensaoEmV;
            state.potenciaEmMW = snapshot.val().potenciaEmMw;
            state.correnteEmMA = snapshot.val().correnteEmMa;
            state.capacitanciaEmNF = snapshot.val().capacitanciaEmNf;
            state.indutanciaEmMH = snapshot.val().indutanciaEmMH;
            state.protecao = snapshot.val().protecao;
            this.setState(state);
        });
        this.click = this.click.bind(this);
    }

    click() {

        this.props.navigation.navigate('Outros');

    }



    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={this.click}>
                        <View style={styles.areaFabricante}>
                            <View style={styles.areaImage}>
                                <Image style={styles.images} source={require('../assets/network.png')} />
                                <Text style={styles.titulo}>Dispositivo</Text>
                            </View>
                            <View style={styles.itens}>
                                <Text style={styles.txt}>Nome: {this.state.nome}</Text>
                                <Text style={styles.txt}>Descrição:  {this.state.descricao} </Text>
                                <Text style={styles.txt}>Modelo:  {this.state.modelo}</Text>
                                <Text style={styles.txt}>Certificado:  {this.state.certificado}</Text>
                                <Text style={styles.txt}>Data de validade do certificado:  {this.state.dataValidade} </Text>
                                <Text style={styles.txt}>Tensão em V (Ui):  {this.state.tensaoEmV} </Text>
                                <Text style={styles.txt}>Potência em mW (Pi):  {this.state.potenciaEmMW}</Text>
                                <Text style={styles.txt}>Corrente em mA (Ii): {this.state.correnteEmMA}</Text>
                                <Text style={styles.txt}>Capacitância em nF (Ci): {this.state.capacitanciaEmNF} </Text>
                                <Text style={styles.txt}>Indutância em mH (Li):  {this.state.indutanciaEmMH}</Text>
                                <Text style={styles.txt}>Proteção: {this.state.protecao} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    areaFabricante: {
        marginTop: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "#DCDCDC"
    },
    areaImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        marginTop: 10
    },
    itens:{
        marginTop:10
    },
    txt:{
        marginTop:10
    }



});