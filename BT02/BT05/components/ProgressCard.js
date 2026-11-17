
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProgressCard({ progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        📚 Học lập trình React Native
      </Text>

      <Text style={styles.description}>
        Mục tiêu: Hoàn thành 5 buổi học
      </Text>

      <View style={styles.progressInfo}>
        <Text style={styles.label}>
          Tiến độ học tập
        </Text>

        <Text style={styles.percent}>
          {progress}%
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.status}>
        {progress === 100
          ? 'Đã hoàn thành mục tiêu!'
          : `Đã hoàn thành ${progress / 20}/5 buổi học`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 18,
    elevation: 4,
    marginBottom: 25,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  description: {
    color: '#64748b',
    marginTop: 10,
    fontSize: 14,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: '#475569',
  },
  percent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  progressBackground: {
    height: 13,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 10,
  },
  status: {
    marginTop: 15,
    color: '#64748b',
    fontSize: 14,
  },
});
