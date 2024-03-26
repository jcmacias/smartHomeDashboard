import React from 'react';
import { View, SafeAreaView } from 'react-native';
import DashboardScreen from './Screens/DashboardScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DashboardScreen />
    </SafeAreaView>

  );
};

export default App;