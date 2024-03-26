import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RoomCardProps {
  roomName: string;
  temperature: number;
  humidity: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ roomName, temperature, humidity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.roomName}>{roomName}</Text>
      <Text>Temperature: {temperature}°C</Text>
      <Text>Humidity: {humidity}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default RoomCard;
