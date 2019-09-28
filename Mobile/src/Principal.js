import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firebase from './FirebaseConnection';



export default class Principal extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {

      nome: '',
      descricao: '',
      sigla: ''

    }

    firebase.database().ref('id').once('value').then((snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.sigla = snapshot.val().sigla;
      state.descricao = snapshot.val().descricao;
      this.setState(state);
    });


    this.click = this.click.bind(this);
  }


  click() {

    this.props.navigation.navigate('Dispositivo');

  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.areaBtn} onPress={this.click}>
          <View style={styles.areaFoto}>
            <Image style={styles.foto} source={require('../assets/user.png')} />
            <View style={styles.areaConteudo}>
              <View style={styles.areaFabricante}>

                <Text style={styles.txt}>{this.state.nome}({this.state.sigla}) </Text>
                <Text style={styles.txt}>{this.state.descricao}</Text>

              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.areaBtn} onPress={this.click}>
        <View style={styles.areaFoto}>
              <Image style={styles.foto} source={require('../assets/user.png')} />
              <View style={styles.areaConteudo}>
          <View style={styles.areaFabricante}>
            
                <Text style={styles.txt}>Araujo Quimica(ARQ) </Text>
                <Text style={styles.txt}>O melhor composto da região, a 13 anos no mercado #éudy</Text>
              
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  areaFabricante: {
    padding: 10,
    marginRight: 6,
    borderWidth: 1,
    borderColor: "#DCDCDC"
  },
  foto: {
    width: 80,
    height: 80
  },
  areaFoto: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  areaConteudo: {
    marginLeft: 10
  },
  txt: {
    textAlign: 'center',
    padding: 5
  },
  areaBtn:{
    marginTop:25
  }




});