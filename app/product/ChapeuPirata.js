import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação

const ChapeuPirata = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}  // Volta para a página anterior
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/hat.jpg')} style={styles.image} />
      <Text style={styles.title}>Chapéu Pirata</Text>
      <Text style={styles.price}>R$ 50,00</Text>
      <Text style={styles.description}>Chapeu Bonito de pirata, bom para usar em suas caças ao tesouro!</Text>
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
    width: 300,
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

export default ChapeuPirata;
