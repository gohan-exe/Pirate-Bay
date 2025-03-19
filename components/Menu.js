import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Menu = ({ categories }) => {
  return (
    <View style={styles.menuContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,

  },
  menuItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
  },
  menuText: {
    color: '#c00',
    fontWeight: 'bold',
  },
});

export default Menu;