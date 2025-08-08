import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { DealDetailsModal } from '@/components/DealDetailsModal';
import { CircleIconButton } from '@/components/primitives/CircleIconButton';
import { Dot } from '@/components/primitives/Dot';
import { Themes } from '@/components/themes';
import { Deal } from '@/types/deal';
import { categoryColor } from '@/utils/category';
import { formatDateShort, formatDistance } from '@/utils/formatters';

export type DealCardProps = { deal: Deal };

export function DealCard({ deal }: DealCardProps) {
  const [open, setOpen] = useState(false);

  const distanceText = formatDistance(deal.distanceMeters);

  const onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setOpen(true);
  };

  return (
    <View style={styles.outer}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${deal.title}, ${deal.store}${distanceText ? `, ${distanceText}` : ''}, gültig bis ${formatDateShort(deal.validUntil)}`}
        onPress={onPress}
        style={({ pressed }) => [styles.inner, pressed && styles.pressed]}
      >
        <View style={styles.leftColumn}>
          <Image source={deal.imageUrl ? { uri: deal.imageUrl } : undefined} style={styles.image} contentFit="cover" transition={150} />
          {distanceText && (
            <View style={styles.distanceRow}>
              <Dot color={categoryColor(deal.category)} />
              <Text style={styles.metaText}>{distanceText}</Text>
            </View>
          )}
        </View>

        <View style={styles.right}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={3} style={styles.title}>
                {deal.title}
              </Text>
              <Text numberOfLines={1} style={styles.store}>
                {deal.store}
              </Text>
            </View>
          </View>

          <View style={styles.metaRow}>
            <View />
            <View style={styles.rightMeta}>
              <Text style={styles.metaText}>Bis: {formatDateShort(deal.validUntil)}</Text>
              <CircleIconButton onPress={onPress} accessibilityLabel="Details öffnen" style={styles.chevBtn}>
                <Ionicons name="chevron-down" size={20} color={Themes.dark.text} />
              </CircleIconButton>
            </View>
          </View>
        </View>
      </Pressable>

      <DealDetailsModal visible={open} onClose={() => setOpen(false)} deal={deal} />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginHorizontal: 12,
    marginVertical: 10,
    backgroundColor: 'transparent', // remove outer background to avoid border look
    borderRadius: 20,
  },
  inner: {
    flexDirection: 'row',
    backgroundColor: Themes.dark.bgDarker,
    borderRadius: 18,
    padding: 12,
    gap: 12,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.98,
  },
  leftColumn: {
    width: 104,
    alignItems: 'flex-start',
  },
  image: {
    width: 104,
    height: 104,
    borderRadius: 16,
    backgroundColor: '#222',
  },
  distanceRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  right: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    color: Themes.dark.sand100,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '700',
  },
  store: {
    marginTop: 6,
    color: Themes.dark.sand300,
    fontSize: 18,
    fontWeight: '500',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  leftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chevBtn: {
    width: 44,
    height: 44,
  },
  metaText: {
    color: Themes.dark.textSecondary,
    fontSize: 15,
  },
});
