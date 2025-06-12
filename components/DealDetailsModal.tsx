import { Button, Modal, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Deal } from '@/types/deal';
import { Themes } from './themes';

export interface Props {
	visible: boolean;
	onClose: () => void;
	deal?: Deal;
}

export function DealDetailsModal({ visible, onClose, deal }: Props) {
	if (!deal) return null;

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
		}).format(price);
	};

	const formatDate = (dateString?: string) => {
		if (!dateString) return null;
		const date = new Date(dateString);
		return date.toLocaleDateString('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
	};

	return (
		<Modal visible={visible} animationType="slide" transparent={true}>
			<SafeAreaView style={styles.container}>
				<View style={styles.modal}>
					<View style={styles.header}>
						<Text style={styles.title} numberOfLines={2}>{deal.title}</Text>
						<TouchableOpacity onPress={onClose} style={styles.closeButton}>
							<Ionicons name="close" size={24} color={Themes.dark.text} />
						</TouchableOpacity>
					</View>
					
					<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
						<View style={styles.storeInfo}>
							<Text style={styles.store}>{deal.store}</Text>
							<Text style={styles.category}>{deal.category}</Text>
						</View>

						<Text style={styles.description}>{deal.description}</Text>

						<View style={styles.priceSection}>
							<Text style={styles.price}>{formatPrice(deal.price)}</Text>
							{deal.originalPrice && (
								<View style={styles.discountInfo}>
									<Text style={styles.originalPrice}>
										{formatPrice(deal.originalPrice)}
									</Text>
									{deal.discount && (
										<View style={styles.discountBadge}>
											<Text style={styles.discountText}>-{deal.discount}%</Text>
										</View>
									)}
								</View>
							)}
						</View>

						{(deal.validFrom || deal.validUntil) && (
							<View style={styles.validitySection}>
								<Text style={styles.validityTitle}>Validity Period</Text>
								<Text style={styles.validityText}>
									{formatDate(deal.validFrom)} - {formatDate(deal.validUntil)}
								</Text>
							</View>
						)}

						<View style={styles.actions}>
							<TouchableOpacity style={styles.actionButton}>
								<Ionicons name="heart-outline" size={24} color={Themes.dark.text} />
								<Text style={styles.actionText}>Save</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.actionButton}>
								<Ionicons name="share-outline" size={24} color={Themes.dark.text} />
								<Text style={styles.actionText}>Share</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
								<Ionicons name="open-outline" size={24} color={Themes.dark.text} />
								<Text style={styles.actionText}>View Deal</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'flex-end',
	},
	modal: {
		backgroundColor: Themes.dark.bgDarker,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		maxHeight: '90%',
		paddingBottom: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		padding: 20,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: Themes.dark.border,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Themes.dark.text,
		flex: 1,
		marginRight: 10,
	},
	closeButton: {
		padding: 5,
	},
	content: {
		padding: 20,
	},
	storeInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	store: {
		fontSize: 16,
		color: Themes.dark.text,
		fontWeight: '600',
	},
	category: {
		fontSize: 14,
		color: Themes.dark.textSecondary,
	},
	description: {
		fontSize: 16,
		color: Themes.dark.textSecondary,
		lineHeight: 24,
		marginBottom: 20,
	},
	priceSection: {
		marginBottom: 20,
		paddingVertical: 15,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: Themes.dark.border,
	},
	price: {
		fontSize: 28,
		fontWeight: 'bold',
		color: Themes.dark.text,
		marginBottom: 5,
	},
	discountInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	originalPrice: {
		fontSize: 18,
		color: Themes.dark.textSecondary,
		textDecorationLine: 'line-through',
	},
	discountBadge: {
		backgroundColor: Themes.dark.accent,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
	discountText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Themes.dark.text,
	},
	validitySection: {
		marginBottom: 20,
	},
	validityTitle: {
		fontSize: 14,
		color: Themes.dark.textSecondary,
		marginBottom: 5,
	},
	validityText: {
		fontSize: 16,
		color: Themes.dark.text,
	},
	actions: {
		flexDirection: 'row',
		gap: 10,
		marginTop: 20,
	},
	actionButton: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: Themes.dark.bgDarkest,
		borderRadius: 10,
		gap: 5,
	},
	primaryButton: {
		backgroundColor: Themes.dark.accent,
	},
	actionText: {
		fontSize: 12,
		color: Themes.dark.text,
		fontWeight: '600',
	},
});
