import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Device {
  id: number;
  name: string;
  status: boolean;
}

interface DeviceCardProps {
  device: Device;
  updateDeviceStatus: (deviceId: number, newStatus: boolean) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, updateDeviceStatus }) => {
  return (
    <TouchableOpacity onPress={() => updateDeviceStatus(device.id, !device.status)} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="lightbulb-o" size={40} color={device?.status ? '#FFF' : '#A9A9A9'} />
        <Text style={styles.statusText}>{device?.status ? 'On' : 'Off'}</Text>
      </View>
      <Text style={styles.roomName} numberOfLines={2}>{device?.name}</Text>
    </TouchableOpacity>
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
