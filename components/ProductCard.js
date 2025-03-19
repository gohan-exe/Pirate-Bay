// components/ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Botao from './Botao';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>💰 {product.price}</Text>
      <Botao />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 180,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    color: '#c00',
    fontSize: 18,
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#c00',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;