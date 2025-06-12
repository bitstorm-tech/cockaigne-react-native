import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LocationInfoProps {
    address: string;
    city: string;
}

export const LocationInfo: React.FC<LocationInfoProps> = ({ address, city }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="location-sharp" size={16} color="#666666" />
            <View>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        marginTop: 16,
    },
    address: {
        fontSize: 14,
        color: '#999999',
        lineHeight: 18,
    },
    city: {
        fontSize: 14,
        color: '#999999',
        lineHeight: 18,
    },
});