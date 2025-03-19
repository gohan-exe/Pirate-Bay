import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação

const StellarBlade = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}  // Volta para a página anterior
      >
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/stellar-blade.jpg')} style={styles.image} />
      <Text style={styles.title}>Stellar Blade</Text>
      <Text style={styles.price}>R$ 10,00</Text>
      <Text style={styles.description}>
        O futuro da humanidade está em jogo em Stellar Blade, 
        uma aventura de ação inédita com foco em narrativa no PlayStation®5. 
        A Terra foi devastada por criaturas estranhas poderosas e os sobreviventes da raça humana fugiram para uma colônia no espaço sideral.
      </Text>
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
    width: 300,
    height: 300,
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

export default StellarBlade;
