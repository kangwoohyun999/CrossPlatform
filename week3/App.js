import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 1. 상단 안내 텍스트 (전체 세로 비율 29) */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>3주:{'\n'}크로스 플랫폼 실습 과제</Text>
      </View>

      {/* 2. 색상 그리드 영역 (전체 세로 비율 45) */}
      <View style={styles.gridBox}>
        {/* 왼쪽 좁은 컬럼 : 노랑(5) / 흰색(6) / 파랑(4) = 15 */}
        <View style={styles.leftColumn}>
          <View style={[styles.cell, styles.yellowBox]} />
          <View style={[styles.cell, styles.whiteBox]} />
          <View style={[styles.cell, styles.blueBox]} />
        </View>

        {/* 오른쪽 넓은 컬럼 : 빨강(11) / 과목행(4) = 15  -> 빨강 높이가 노랑+흰색과 일치 */}
        <View style={styles.rightColumn}>
          <View style={[styles.cell, styles.redBox]}>
            <Text style={styles.schoolText}>강남대학교</Text>
            <Text style={styles.infoText}>학과: 인공지능</Text>
            <Text style={styles.infoText}>학번: 202404178</Text>
            <Text style={styles.infoText}>이름: 강우현</Text>
          </View>

          {/* 과목행 : 흰색 텍스트박스(7) + 오른쪽 작은 컬럼(1) */}
          <View style={styles.subjectRow}>
            <View style={[styles.cell, styles.subjectTextBox]}>
              <Text style={styles.subjectText}>과목: 크로스 플랫폼</Text>
            </View>
            <View style={styles.smallColumn}>
              <View style={[styles.cell, styles.smallWhite]} />
              <View style={[styles.cell, styles.smallYellow]} />
            </View>
          </View>
        </View>
      </View>

      {/* 3. 하단 여백 (전체 세로 비율 26) */}
      <View style={styles.footer} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // 1) 상단 타이틀
  titleBox: {
    flex: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 30,
  },

  // 2) 색상 그리드
  gridBox: {
    flex: 45,
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 2,
    borderColor: '#000',
  },

  leftColumn: {
    flex: 2,
    flexDirection: 'column',
  },
  rightColumn: {
    flex: 7,
    flexDirection: 'column',
  },

  yellowBox: {
    flex: 5,
    backgroundColor: '#FFCA08',
  },
  whiteBox: {
    flex: 6,
    backgroundColor: '#ffffff',
  },
  blueBox: {
    flex: 4,
    backgroundColor: '#025ABB',
  },

  redBox: {
    flex: 11,
    backgroundColor: '#FF1621',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 14,
  },
  schoolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 3,
  },

  subjectRow: {
    flex: 4,
    flexDirection: 'row',
  },
  subjectTextBox: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectText: {
    color: '#FF6600',
    fontWeight: 'bold',
    fontSize: 20,
  },
  smallColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  smallWhite: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  smallYellow: {
    flex: 1,
    backgroundColor: '#FFCA08',
  },

  // 3) 하단 여백
  footer: {
    flex: 26,
    backgroundColor: '#fff',
  },
});