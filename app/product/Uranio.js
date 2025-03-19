import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação

const Uranio = () => {
    const router = useRouter();

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}  // Volta para a página anterior
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      <Image source={require('../../assets/uranio.jpg')} style={styles.image} />
      <Text style={styles.title}>Urânio</Text>
      <Text style={styles.price}>R$ 1.500.000</Text>
      <Text style={styles.description}>O urânio é um metal pesado, radioativo e denso, com o símbolo químico U. 
        É um elemento natural que ocorre na crosta terrestre e na água do mar, bastante utilizado como combustivel nuclear e na criação de bombas nucleares </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 15,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Uranio;
