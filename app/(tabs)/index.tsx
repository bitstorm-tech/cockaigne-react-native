import { DealCard } from '@/components/deals/DealCard';
import { DealsListHeader } from '@/components/DealsListHeader';
import { UserProfileHeader } from '@/components/UserProfileHeader';
import { useDeals } from '@/hooks/useDeals';
import { Deal } from '@/types/deal';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DealsScreen() {
  const { deals, loading, error, refreshing, hasMore, refresh, loadMore, retry } = useDeals();

  if (loading && deals.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.loadingText}>Loading deals...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error && deals.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Unable to load deals</Text>
          <Text style={styles.errorMessage}>{error.message}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={retry}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Deal>
        data={deals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Deal }) => <DealCard deal={item} />}
        ListHeaderComponent={
          <>
            <UserProfileHeader username="JBJB" isPro={true} activities={2} favorites={0} saved={0} address="Jägerstraße 40" city="10117 Berlin" />
            <DealsListHeader
              dealCount={deals.length}
              onFilterPress={() => {
                // TODO: Implement filter functionality
              }}
            />
          </>
        }
        ListFooterComponent={
          loading && deals.length > 0 ? (
            <View style={styles.loadMoreContainer}>
              <ActivityIndicator size="small" color="#ffffff" />
            </View>
          ) : !hasMore && deals.length > 0 ? (
            <View style={styles.endContainer}>
              <Text style={styles.endText}>No more deals</Text>
            </View>
          ) : null
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!loading && hasMore) loadMore();
        }}
        refreshing={refreshing}
        onRefresh={refresh}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#999999',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadMoreContainer: {
    padding: 20,
    alignItems: 'center',
  },
  endContainer: {
    padding: 20,
    alignItems: 'center',
  },
  endText: {
    fontSize: 14,
    color: '#666666',
  },
});
