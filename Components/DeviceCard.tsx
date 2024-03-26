import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DeviceCardProps {
  isOn: boolean;
  roomName: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ isOn, roomName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="lightbulb-o" size={40} color={isOn ? '#FFF' : '#A9A9A9'} />
        <Text style={styles.statusText}>{isOn ? 'On' : 'Off'}</Text>
      </View>
      <Text style={styles.roomName} numberOfLines={2}>{roomName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272729',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 8,
    width: 115,
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c9c9c9',
    marginLeft: 10,
  },
  roomName: {
    fontSize: 16,
    color: '#c9c9c9',
    // alignSelf: 'flex-end'
  },
});

export default DeviceCard;
