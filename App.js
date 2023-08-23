import { StyleSheet, View } from 'react-native';
import TextArea from './src/components/TextArea';

export default function App() {
  return (
    <View style={styles.container}>
      <TextArea/>
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
