import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, FlatList, ScrollView } from "react-native";

import Produtos from "./src/components/produtos";

import api from "./src/services/api";

import Titulo from "./src/components/titulo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  async componentDidMount() {
    const response = await api.get("items");
    this.setState({
      produtos: response.data,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar style="auto" />
          <Titulo titulo="Lista de produtos"></Titulo>
          <FlatList
            data={this.state.produtos}
            style={styles.list}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.content}
            renderItem={({ item }) => <Produtos data={item} />}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
  },
  list: {
    flex: 1
  },
  contente: {
    paddingHorizontal: 20
  }
});

export default App;
