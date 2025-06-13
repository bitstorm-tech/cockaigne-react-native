import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LocationInfo } from './LocationInfo';
import { ProfilePicture } from './ProfilePicture';
import { ProfileStats } from './ProfileStats';
interface UserProfileHeaderProps {
  username: string;
  isPro?: boolean;
  activities: number;
  favorites: number;
  saved: number;
  address: string;
  city: string;
}

export const UserProfileHeader = ({ username, isPro = false, activities, favorites, saved, address, city }: UserProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.logoSection}>
          <Text style={styles.appName}>cockaigne</Text>
          {isPro && <Text style={styles.proBadge}>PRO</Text>}
        </View>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <ProfilePicture size={80} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{username}</Text>
            <ProfileStats activities={activities} favorites={favorites} saved={saved} />
          </View>
        </View>

        <LocationInfo address={address} city={city} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appName: {
    fontSize: 24,
    fontWeight: '300',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  proBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 1,
  },
  profileSection: {
    gap: 4,
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
});
