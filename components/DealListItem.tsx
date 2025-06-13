import { Deal } from '@/types/deal';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DealDetailsModal } from './DealDetailsModal';
import { BaumarktGartenIcon } from './icons/BaumarktGartenIcon';
import { Themes } from './themes';

interface DealListItemProps {
  deal: Deal;
}

export function DealListItem({ deal }: DealListItemProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  const getDiscountText = () => {
    if (deal.discount) {
      return `-${deal.discount}%`;
    }
    if (deal.originalPrice) {
      const discount = Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100);
      return `-${discount}%`;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {deal.title}
          </Text>
          <Text style={styles.store}>{deal.store}</Text>
        </View>
        <Ionicons name="arrow-redo" size={24} color={Themes.dark.text} />
      </View>
      <TouchableOpacity style={styles.content} onPress={() => setModalVisible(true)}>
        <View style={styles.iconContainer}>
          <BaumarktGartenIcon />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.description} numberOfLines={2}>
            {deal.description}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatPrice(deal.price)}</Text>
            {deal.originalPrice && (
              <>
                <Text style={styles.originalPrice}>{formatPrice(deal.originalPrice)}</Text>
                {getDiscountText() && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{getDiscountText()}</Text>
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <DealDetailsModal visible={modalVisible} onClose={() => setModalVisible(false)} deal={deal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Themes.dark.bgDarkest,
    padding: 12,
    paddingBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Themes.dark.text,
    marginBottom: 2,
  },
  store: {
    fontSize: 12,
    color: Themes.dark.textSecondary,
  },
  content: {
    backgroundColor: Themes.dark.bgDarker,
    padding: 12,
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 12,
    paddingTop: 4,
  },
  detailsContainer: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: Themes.dark.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Themes.dark.text,
  },
  originalPrice: {
    fontSize: 14,
    color: Themes.dark.textSecondary,
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    backgroundColor: Themes.dark.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Themes.dark.text,
  },
});
