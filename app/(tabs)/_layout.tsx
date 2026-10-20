import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0a0a0f' }, tabBarActiveTintColor: '#2563eb' }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="two" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="aptitude" options={{ href: null }} />
      <Tabs.Screen name="coding" options={{ href: null }} />
      <Tabs.Screen name="cover" options={{ href: null }} />
      <Tabs.Screen name="tracker" options={{ href: null }} />
      <Tabs.Screen name="resume" options={{ href: null }} />
      <Tabs.Screen name="interview" options={{ href: null }} />
    </Tabs>
  );
}