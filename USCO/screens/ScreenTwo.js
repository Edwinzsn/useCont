import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSecondContext } from '../contexts/SecondContext';

export default function ScreenTwo({ navigation }) {
  const { theme, toggleTheme } = useSecondContext();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={[styles.title, { color: theme === 'light' ? '#000' : '#fff' }]}>
        Tema actual: {theme}
      </Text>
      <Button title="Cambiar Tema" onPress={toggleTheme} />
      <Button title="Volver a Pantalla 1" onPress={() => navigation.navigate('ScreenOne')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
