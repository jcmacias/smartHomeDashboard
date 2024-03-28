import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import WeatherInfo from '../Components/WeatherInfo';
import FavoriteDevicesSection from '../Components/FavoriteDevicesSection';
import FavoriteScenesSection from '../Components/FavoriteScenesSection';
import DeviceCard from '../Components/DeviceCard';

const devices: Array<{ id: number, name: string, status: boolean }> = Array(
  { "id": 0, "name": "Switch 1.1 Kitchen", 'status': true },
  { "id": 1, "name": "Switch 1.2 Living Room", 'status': false },
  { "id": 2, "name": "Switch 1.3 Master Bedroom", 'status': true },
  { "id": 2, "name": "Switch 1.4 Guest Bedroom", 'status': false }
);


const DashboardScreen: React.FC = () => {
  const [devicesState, setDevicesState] = useState(devices);

  const updateDeviceStatus = (deviceId: number, newStatus: boolean) => {
    setDevicesState(prevDevices =>
      prevDevices.map(device =>
        device.id === deviceId ? { ...device, status: newStatus } : device
      )
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Smart Home" />
      <WeatherInfo cityName='Miami' temperature={30} humidity={90} isSunny={false} />
      <FavoriteScenesSection />
      <View style={styles.scenesContainer}></View>
      <FavoriteDevicesSection />
      <View style={styles.devicesContainer}>
        {devicesState?.map(device => <DeviceCard device={device} updateDeviceStatus={updateDeviceStatus} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  devicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scenesContainer: {
    paddingVertical: 16,
    marginTop: 16
  }
});

export default DashboardScreen;