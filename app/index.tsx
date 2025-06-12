import { DealListItem } from '@/components/DealListItem';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <DealListItem></DealListItem>
            <DealListItem></DealListItem>
            <DealListItem></DealListItem>
            <DealListItem></DealListItem>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        backgroundColor: '#000000',
    },
});
