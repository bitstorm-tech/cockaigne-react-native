import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ProfilePictureProps {
  size?: number;
}

export const ProfilePicture = ({ size = 80 }: ProfilePictureProps) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.imageContainer}>
        <View style={styles.topRow}>
          <View style={[styles.imageCell, styles.topLeft]} />
          <View style={[styles.imageCell, styles.topRight]} />
        </View>
        <View style={styles.bottomRow}>
          <View style={[styles.imageCell, styles.bottomLeft]} />
          <View style={[styles.imageCell, styles.bottomRight]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageCell: {
    flex: 1,
    backgroundColor: '#333333',
    borderWidth: 0.5,
    borderColor: '#1a1a1a',
  },
  topLeft: {
    backgroundColor: '#4a4a4a',
  },
  topRight: {
    backgroundColor: '#3a3a3a',
  },
  bottomLeft: {
    backgroundColor: '#3a3a3a',
  },
  bottomRight: {
    backgroundColor: '#4a4a4a',
  },
});
