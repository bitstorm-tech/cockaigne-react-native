import { BottomTabBar } from '@/components/navigation/BottomTabBar';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Deals',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
        }}
      />
    </Tabs>
  );
}
