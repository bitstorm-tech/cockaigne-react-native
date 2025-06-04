import { Button, Modal, SafeAreaView, StyleSheet, Text } from 'react-native';

export interface Props {
	visible: boolean;
	onClose: () => void;
}

export function DealDetailsModal({ visible, onClose }: Props) {
	return (
		<Modal visible={visible} animationType="slide" transparent={true}>
			<SafeAreaView style={styles.container}>
				<Text>Hallo</Text>
				<Button title="Close" onPress={onClose}></Button>
			</SafeAreaView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10,
		marginVertical: 100,
		backgroundColor: 'red',
		borderRadius: 20,
	},
});
