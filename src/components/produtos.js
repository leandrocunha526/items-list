import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const categoryColors = {
  Perecível: 'orange',
  'Não perecível': 'blue'
};

export default class Produtos extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Image
            source={this.props.data.image}
            style={styles.image}
        />
        <View styles={styles.description}>
          <Text style={styles.text}>
            {this.props.data.description}
          </Text>
          <View style={[styles.category, { backgroundColor: categoryColors[this.props.data.category] }]}>
          <Text style={[{ fontWeight: "bold", fontSize: 16, color: "white" }]}>
          {this.props.data.category}
          </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C9F1FD',
    padding: 15,
    marginVertical: "1%",
    margin: 20,
    flex: 1,
  },
  image: {
    height: 200,
    width: 300,
  },
  text: {
    fontSize: 25,
  },
  description: {
    paddingRight: '5%',
    paddingVertical: '3%',
  },
  category: {
    padding: 8,
    marginTop: 'auto',
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
});
