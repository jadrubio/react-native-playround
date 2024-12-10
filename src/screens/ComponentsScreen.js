import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Jose'
  return(
  <View>
    <Text style={styles.textStyle}>This is ComponentsScreen</Text>
    <Text stlye={styles.subHeader}>Getting Started with React Native!</Text>
    <Text style={styles.plainText}>My name is {name}!</Text>
  </View>
)}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeader: {
    fontSize: 45,
  },
  plainText: {
    fontSize: 20,
  }
})

export default ComponentsScreen;
