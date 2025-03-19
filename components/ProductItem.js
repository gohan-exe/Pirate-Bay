// ProductItem.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ProductCard from './ProductCard';  // Supondo que o ProductCard esteja no mesmo diretório

const ProductItem = ({ product }) => {
  const router = useRouter();

  return (
    <View style={styles.productCardWrapper}>
      <ProductCard product={product} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(product.page)}  // Navegação para a página do produto específico
      >
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productCardWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#c00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductItem;
