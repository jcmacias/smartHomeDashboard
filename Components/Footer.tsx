import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Smart Home Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Footer;