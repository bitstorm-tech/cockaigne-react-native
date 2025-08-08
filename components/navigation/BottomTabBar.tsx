import { LocationPinIcon } from '@/components/icons/LocationPinIcon';
import { MapFoldIcon } from '@/components/icons/MapFoldIcon';
import { TrendUpIcon } from '@/components/icons/TrendUpIcon';
import { Themes } from '@/components/themes';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ACTIVE_COLOR = Themes.dark.bottomBar.iconActive; // sand-like, warm light
const INACTIVE_COLOR = Themes.dark.bottomBar.iconInactive;

const ORDER: ('search' | 'index' | 'map')[] = ['search', 'index', 'map'];

export function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const items = useMemo(() => {
    const set = new Set(state.routes.map((r) => r.name));
    return ORDER.filter((name) => set.has(name));
  }, [state.routes]);

  const onPress = useCallback(
    (routeName: string, isFocused: boolean, routeKey: string) => () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: routeKey,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(routeName as never);
      }
    },
    [navigation],
  );

  return (
    <View style={[styles.shadowWrap, { paddingBottom: insets.bottom }]}>
      <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.row}>
          {items.map((name) => {
            const route = state.routes.find((r) => r.name === name)!;
            const options = descriptors[route.key]?.options ?? {};
            const isFocused = state.index === state.routes.indexOf(route);

            const color = isFocused ? ACTIVE_COLOR : INACTIVE_COLOR;

            return (
              <Pressable
                key={route.key}
                accessibilityRole="tab"
                accessibilityState={{ selected: isFocused }}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? options.title ?? name}
                onPress={onPress(route.name, isFocused, route.key)}
                hitSlop={10}
                android_ripple={{ color: 'rgba(255,255,255,0.06)', borderless: true }}
                style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
                testID={`tab-${name}`}
              >
                {name === 'search' ? (
                  <LocationPinIcon width={28} height={28} fill={color} />
                ) : name === 'index' ? (
                  <TrendUpIcon width={32} height={32} fill={color} />
                ) : (
                  <MapFoldIcon width={28} height={28} fill={color} />
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrap: {
    backgroundColor: 'transparent',
    // Elevation/shadow outside the rounded container
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: -2 },
      },
      android: {
        elevation: 12,
      },
      default: {},
    }),
  },
  container: {
    backgroundColor: Themes.dark.bottomBar.background,
    borderTopLeftRadius: Themes.dark.bottomBar.radius,
    borderTopRightRadius: Themes.dark.bottomBar.radius,
    overflow: 'hidden',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Themes.dark.bottomBar.divider,
  },
  row: {
    height: 64,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 48,
  },
  itemPressed: {
    opacity: 0.8,
  },
});

export default BottomTabBar;
