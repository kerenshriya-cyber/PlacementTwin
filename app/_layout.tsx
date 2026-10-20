import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0a0a0f' }, tabBarActiveTintColor: '#2563eb' }}>
      
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      
      <Tabs.Screen name="two" options={{ title: 'Dashboard' }} />
      
      <Tabs.Screen name="resume" options={{ title: 'Resume' }} />
      
      <Tabs.Screen name="interview" options={{ title: 'Interview' }} />

      {/* ADD THESE 4 - THIS IS WHY IT GOES BACK TO PAGE 1 */}
      <Tabs.Screen name="aptitude" options={{ title: 'Aptitude', href: null }} />
      
      <Tabs.Screen name="coding" options={{ title: 'Coding', href: null }} />
      
      <Tabs.Screen name="cover" options={{ title: 'Cover', href: null }} />
      
      <Tabs.Screen name="tracker" options={{ title: 'Tracker', href: null }} />

    </Tabs>
  );
}