import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação

const Harley = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}  // Volta para a página anterior
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/Harley.png')} style={styles.image} />
      <Text style={styles.title}>Harley Eighty Eight</Text>
      <Text style={styles.price}>R$ 80,00</Text>
      <Text style={styles.description}>A Harley-Davidson Forty-Eight é uma moto com motor V-Twin de 1.200 cm³ refrigerado a ar. 
        Ela tem um estilo custom e é adequada para uso na cidade. </Text>
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
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 350,
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

export default Harley;
