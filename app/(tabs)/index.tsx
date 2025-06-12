import { DealListItem } from '@/components/DealListItem';
import { useDeals } from '@/hooks/useDeals';
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DealsScreen() {
    const { deals, loading, error, refreshing, hasMore, refresh, loadMore, retry } = useDeals();

    const handleScroll = (event: any) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isCloseToBottom && hasMore && !loading) {
            loadMore();
        }
    };

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
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={400}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor="#ffffff" />}
            >
                {deals.map((deal) => (
                    <DealListItem key={deal.id} deal={deal} />
                ))}
                {loading && deals.length > 0 && (
                    <View style={styles.loadMoreContainer}>
                        <ActivityIndicator size="small" color="#ffffff" />
                    </View>
                )}
                {!hasMore && deals.length > 0 && (
                    <View style={styles.endContainer}>
                        <Text style={styles.endText}>No more deals</Text>
                    </View>
                )}
            </ScrollView>
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
