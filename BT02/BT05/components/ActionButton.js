
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function ActionButton({
  onPress,
  completed,
  title,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        completed && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={completed && !title}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>
        {title || (completed
          ? 'ĐÃ HOÀN THÀNH'
          : '🚀 BẮT ĐẦU HỌC')}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginBottom: 12,
  },
  disabledButton: {
    backgroundColor: '#94a3b8',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
