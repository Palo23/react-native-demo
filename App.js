import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import diamondImage from './assets/diamond-red.png';

const App = () => {
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.text}>Hello World</Text>
      <Image
      source={{uri: 'https://picsum.photos/200/300'}}
      style={styleSheet.image}></Image>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#292929"
  },
  text: {
    fontSize: 30,
    color: '#fff'
  },
  image: {
    height: 200, 
    width: 200,
    borderRadius: 100,
  }
});

export default App;