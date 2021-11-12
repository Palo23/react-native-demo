import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import diamondImage from './assets/diamond-red.png';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission denied');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) {
      console.log('Please select an image');
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  let openShareDialog = async () => {
    if(!(await Sharing.isAvailableAsync())){
      alert('Sharing is not available in your device');
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.text}>Pick an image</Text>
      <TouchableOpacity
      onPress={openImagePickerAsync}>
      <Image
      source={{uri: selectedImage ? selectedImage.localUri : 'https://picsum.photos/200/300'}}
      style={styleSheet.image}/>
      </TouchableOpacity>

      {
        selectedImage ? 
        <TouchableOpacity  
      onPress={openShareDialog}
      style={styleSheet.pressButton}>
        <Text style={styleSheet.buttonText}>Share the image</Text>
      </TouchableOpacity>
      : <View/>
      }
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  pressButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 7,
    marginTop: 10,
  }
});

export default App;