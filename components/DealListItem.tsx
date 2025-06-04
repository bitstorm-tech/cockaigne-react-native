import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DealDetailsModal } from './DealDetailsModal';
import { Ionicons } from '@expo/vector-icons';
import { Themes } from './themes';

export function DealListItem() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View>
			<View style={styles.title}>
				<Text>Title</Text>
				<Ionicons name="arrow-redo" size={24} color={Themes.dark.text} />
			</View>
			<Text style={styles.content} onPress={() => setModalVisible(true)}>
				Content
			</Text>
			<DealDetailsModal visible={modalVisible} onClose={() => setModalVisible(false)}></DealDetailsModal>
		</View >
	);
}

const styles = StyleSheet.create({
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Themes.dark.bgDarkest,
		color: Themes.dark.text,
		padding: 5,
	},
	content: {
		backgroundColor: Themes.dark.bgDarker,
		color: Themes.dark.text,
		paddingHorizontal: 5,
		paddingVertical: 30,
	}
});
