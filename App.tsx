import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', borderColor: "red", borderWidth: 1, fontSize: 30, padding: 4 }}>
        Hello Guys Iam VQ!
      </Text>
      <Text style={styles.hello}>Iam LazyBoy</Text>
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

  hello: {
    fontSize: 20,
    color: 'green'
  }
});
