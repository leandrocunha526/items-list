import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Titulo extends Component {
  render() {
    return (
      <View>
        <Text style={style.titulo}>{this.props.titulo}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  titulo: {
    margin: 20,
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default Titulo;
