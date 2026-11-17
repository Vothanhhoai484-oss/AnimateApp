
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handleReset = () => {
    setProgress(0);
  };

  const completed = progress === 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🎯 STUDY GOAL</Text>
        <Text style={styles.subtitle}>
          Chinh phục mục tiêu mỗi ngày
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>
          Mục tiêu học tập của tôi
        </Text>

        <ProgressCard progress={progress} />

        <ActionButton
          onPress={handleStart}
          completed={completed}
        />

        {completed && (
          <ActionButton
            title="Làm lại mục tiêu"
            onPress={handleReset}
            completed={false}
          />
        )}

        <AnimatedMessage visible={completed} />

        <Text style={styles.footer}>
          Cố gắng từng ngày để đạt được thành công!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 28,
    paddingTop: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: '#dbeafe',
    fontSize: 15,
    marginTop: 8,
  },
  content: {
    flex: 1,
    padding: 22,
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },
  footer: {
    textAlign: 'center',
    color: '#64748b',
    marginTop: 30,
    fontSize: 14,
  },
});
