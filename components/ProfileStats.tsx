import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProfileStatsProps {
  activities: number;
  favorites: number;
  saved: number;
}

export const ProfileStats = ({ activities, favorites, saved }: ProfileStatsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Ionicons name="repeat" size={16} color="#999999" />
        <Text style={styles.statNumber}>{activities}</Text>
      </View>
      <View style={styles.statItem}>
        <Ionicons name="heart-outline" size={16} color="#999999" />
        <Text style={styles.statNumber}>{favorites}</Text>
      </View>
      <View style={styles.statItem}>
        <Ionicons name="bookmark-outline" size={16} color="#999999" />
        <Text style={styles.statNumber}>{saved}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statNumber: {
    fontSize: 16,
    color: '#999999',
    fontWeight: '500',
  },
});
