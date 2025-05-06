import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Loja() {
  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.title}>Bem-vindo à Loja</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.rectangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#ccc',
    marginBottom: 30,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  rectangle: {
    width: 250,
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});
