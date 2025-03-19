import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // Para navegação
import Menu from '../components/Menu';
import ProductCard from '../components/ProductCard';

const App = () => {
  const router = useRouter();
  const categories = ['Todos', 'Acessórios', 'Mapas', 'Comida', 'Bebidas'];

  const products = [
    {
      id: 1,
      name: 'Chapéu Pirata',
      price: 'R$ 50,00',
      image: require('../assets/hat.jpg'),
      page: '/product/ChapeuPirata', // Caminho para a página individual
    },
    {
      id: 2,
      name: 'Urânio',
      price: 'R$ 1.500.000',
      image: require('../assets/uranio.jpg'),
      page: '/product/Uranio',
    },
    {
      id: 3,
      name: 'Harley',
      price: 'R$ 80,00',
      image: require('../assets/Harley.png'),
      page: '/product/Harley',
    },
    {
      id: 4,
      name: 'Stellar Blade',
      price: 'R$ 10,00',
      image: require('../assets/stellar-blade.jpg'),
      page: '/product/StellarBlade',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/The_Pirate_Bay_logo.svg.png')}
      style={styles.background}
      resizeMode="center"
    >
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>🏴☠️ PirateBay</Text>

        <Menu categories={categories} />

        {/* Scroll horizontal para exibir os produtos */}
        <ScrollView
          horizontal
          style={styles.productsContainer}
          showsHorizontalScrollIndicator={false}
        >
          {products.map((product) => (
            <View key={product.id} style={styles.productWrapper}>
              <ProductCard product={product} />
              {/* Colocando o botão dentro do mesmo contêiner */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(product.page)}  // Navegação para a página do produto específico
              >
                <Text style={styles.buttonText}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    minHeight: '100%',
  },
  title: {
    fontSize: 32,
    color: '#c00',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  productsContainer: {
    marginVertical: 20,
    maxHeight: 350,
  },
  productWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#c00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,  // Distância entre o cartão e o botão
    width: '90%',  // Botão ocupa toda a largura disponível
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto do botão
  },
});

export default App;
