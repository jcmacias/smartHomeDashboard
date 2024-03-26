import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface WeatherInfoProps {
  cityName: string;
  temperature: number;
  humidity: number;
  isSunny: boolean;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ cityName, temperature, humidity, isSunny }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cityDetails}>
        <Text style={styles.cityName}>{cityName}</Text>
        <View style={styles.weatherDetails}>
          <Text style={styles.temperature}>{temperature}°C</Text>
          <Text style={styles.humidity}>{humidity}%</Text>
        </View>
      </View>
      <View style={styles.weatherIcon}>
        <Icon name={isSunny ? 'weather-sunny' : 'weather-cloudy'} size={50} color={isSunny ? '#FBC02D' : "#c9c9c9"} />
        <Text style={styles.weatherIconText}>{isSunny ? 'clear sky' : "overcast clouds"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cityDetails: {
    marginRight: 30
  },
  cityName: {
    fontSize: 18,
    marginBottom: 5,
    color: "#FFF"
  },
  weatherDetails: {
    marginBottom: 10,
  },
  weatherIcon: {
    alignItems: 'center'
  },
  weatherIconText: {
    fontSize: 18,
    marginBottom: 5,
    color: "#FFF",
    marginTop: 20
  },
  temperature: {
    fontSize: 40,
    marginBottom: 5,
    color: "#FFF"
  },
  humidity: {
    fontSize: 18,
    marginBottom: 5,
    color: "#FFF"
  }
});

export default WeatherInfo;
