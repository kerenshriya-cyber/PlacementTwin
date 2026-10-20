import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="two" />
      <Stack.Screen name="resume" />
      <Stack.Screen name="interview" />
      <Stack.Screen name="aptitude" />
      <Stack.Screen name="coding" />
      <Stack.Screen name="cover" />
      <Stack.Screen name="tracker" />
    </Stack>
  );
}