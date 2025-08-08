import { Themes } from '@/components/themes';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

export type CircleIconButtonProps = {
  onPress?: () => void;
  children: React.ReactNode;
  accessibilityLabel?: string;
  style?: ViewStyle | ViewStyle[];
};

export function CircleIconButton({ onPress, children, accessibilityLabel, style }: CircleIconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => [styles.base, pressed && styles.pressed, style]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Themes.dark.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
});
