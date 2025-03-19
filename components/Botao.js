// components/Botao.js
import React from 'react';
import { Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => {
        Alert.alert('PirateBay', 'Produto adicionado ao carrinho! 🏴☠️');
        onPress?.();
      }}
    >
      <Text style={styles.textoBotao}>Comprar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#c00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Botao;