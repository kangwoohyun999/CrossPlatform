import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>전공: 인공지능</Text>
      <Text style={styles.text}>학번: 202404178</Text>
      <Text style={styles.text}>이름: 강우현</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 8,
  },
});
