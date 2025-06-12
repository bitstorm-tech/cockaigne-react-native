import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { Themes } from '@/components/themes';

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search Deals</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Search for deals..."
                    placeholderTextColor={Themes.dark.text}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.placeholderText}>
                    Search functionality coming soon
                </Text>
            </View>
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
    searchContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    searchInput: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#2e2e2e',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    placeholderText: {
        color: Themes.dark.text,
        fontSize: 16,
        textAlign: 'center',
    },
});