import React, { useState } from 'react';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';

const DEPARTMENT = '인공지능융합공학부';
const STUDENT_ID = '202404178';
const NAME = '강우현';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const textColor = { color: darkMode ? 'white' : 'black' };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? 'black' : 'white' },
      ]}
    >
      <View style={styles.top}>
        <Image source={require('./assets/logo.png')} style={styles.image} />
      </View>

      <View style={styles.center}>
        <Text style={[styles.switchText, textColor]}>
          {darkMode ? '스위치: ON' : '스위치: OFF'}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={[styles.info, textColor]}>학과: {DEPARTMENT}</Text>
        <Text style={[styles.info, textColor]}>학번: {STUDENT_ID}</Text>
        <Text style={[styles.info, textColor]}>이름: {NAME}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20 },
  center: { alignItems: 'center' },
  bottom: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 },
  image: { width: 200, height: 200 },
  switchText: { fontSize: 20, marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 6 },
});