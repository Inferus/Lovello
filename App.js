import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';
import {styles} from './styles'
import { Footer } from './components/Footer';
import { Content } from './components/Content';
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Content></Content>
      <Footer></Footer>
    </View>
  );
}


