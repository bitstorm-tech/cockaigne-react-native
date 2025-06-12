import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FilterIcon } from './icons/FilterIcon';

interface DealsListHeaderProps {
    onFilterPress?: () => void;
    dealCount?: number;
}

export const DealsListHeader: React.FC<DealsListHeaderProps> = ({ onFilterPress, dealCount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>Available Deals</Text>
                {dealCount !== undefined && (
                    <Text style={styles.count}>{dealCount}</Text>
                )}
            </View>
            <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
                <FilterIcon width={20} height={20} fill="#ffffff" />
                <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a',
    },
    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
    },
    count: {
        fontSize: 16,
        color: '#666666',
        fontWeight: '500',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    filterText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff',
    },
});