
import React, { useEffect, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function AnimatedMessage({ visible }) {
  const scale = useRef(
    new Animated.Value(0.5)
  ).current;

  const opacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 4,
          tension: 60,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scale.setValue(0.5);
      opacity.setValue(0);
    }
  }, [visible, scale, opacity]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.message,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      <Text style={styles.icon}>🎉</Text>

      <Text style={styles.title}>
        CHÚC MỪNG!
      </Text>

      <Text style={styles.description}>
        Bạn đã hoàn thành mục tiêu học tập.
      </Text>

      <Text style={styles.reward}>
        Hãy tiếp tục cố gắng nhé! ⭐
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#dcfce7',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  icon: {
    fontSize: 45,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#15803d',
    marginTop: 8,
  },
  description: {
    color: '#166534',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
  reward: {
    color: '#15803d',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
