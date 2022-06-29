import { StyleSheet, View } from 'react-native';
import Integer from './integer';
import Login from './login';
export default function App() {
  return (
    <View style={styles.container}>
      <Integer />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
