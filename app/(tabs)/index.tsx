import { DealListItem } from '@/components/DealListItem';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

export default function DealsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Today&apos;s Deals</Text>
            </View>
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <DealListItem />
                <DealListItem />
                <DealListItem />
                <DealListItem />
                <DealListItem />
                <DealListItem />
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
        gap: 4,
        paddingBottom: 20,
    },
});
