import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useFirstContext } from '../contexts/FirstContext';

export default function ScreenOne({ navigation }) {
  const { count, increment, decrement } = useFirstContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <View style={styles.buttons}>
        <Button title="Incrementar" onPress={increment} />
        <Button title="Decrementar" onPress={decrement} />
      </View>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('ScreenTwo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' }
});
