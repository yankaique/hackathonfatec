import React, { Component } from 'react';

import { View,Text,StyleSheet,Image } from 'react-native';

import firebase from './FirebaseConnection';

// import { Container } from './styles';

export default class Outros extends Component {
    static navigationOptions = {
        title: 'Informações de barreiras'
    }
    constructor(props){
        super(props);
        this.state={
            nome:'',
            descricao:'',
            modelo:'',
            certificado:'',
            dataValidade:'',
            tensaoEmV:'',
            potenciaEmMW:'',
            correnteEmMA:'',
            capacitanciaEmNF:'',
            indutanciaEmMH:''

        }
        firebase.database().ref('id').child('idProduto').child('barreiras').once('value').then((snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            state.modelo = snapshot.val().modelo;
            state.protecao = snapshot.val().protecao;
            state.validade = snapshot.val().validade;
            state.capacitânciaEmNf = snapshot.val().capacitânciaEmNf;
            state.correnteEmMa = snapshot.val().ecorrenteEmMa;
            state.descricao = snapshot.val().descricao;
            state.indutanciaEmMh = snapshot.val().indutanciaEmMh;
            state.potenciaEmMw = snapshot.val().potenciaEmMw;
            state.tensaoEmV = snapshot.val().tensaoEmV;
            this.setState(state);
          });
      
    
    }
    render() {
        return (
            <View>
                <View style={styles.areaIMG}>
                    <Image source={require('../assets/v.png')}/>
                </View>
                <View style={styles.areaFabricante}>
                    <Text style={styles.txt}>Nome: {this.state.nome}</Text>
                    <Text style={styles.txt}>Modelo: {this.state.modelo}</Text>
                    <Text style={styles.txt}>Proteção: {this.state.protecao}</Text>
                    <Text style={styles.txt}>Capacitância em NF: {this.state.capacitânciaEmNf}</Text>
                    <Text style={styles.txt}>corrente em MA: {this.state.ecorrenteEmMa}</Text>
                    <Text style={styles.txt}>Indutancia em MH: {this.state.indutanciaEmMh}</Text>
                    <Text style={styles.txt}>Potencia em MW: {this.state.potenciaEmMw}</Text>
                    <Text style={styles.txt}>Tensao em V: {this.state.tensaoEmV}</Text>
                    <Text style={styles.txt}>Validade: {this.state.validade}</Text>
                </View>
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
    txt:{
        marginTop:10
    },
    areaIMG:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    }



});