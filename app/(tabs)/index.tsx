import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🎯 PlacementTwin</Text>
        <Text style={styles.title}>Your AI Placement Assistant</Text>
        <Text style={styles.subtitle}>Resume Analysis • Mock Interviews • ATS Score</Text>
        
        <Pressable style={styles.button} onPress={() => router.push('/(tabs)/two' as any)}>
          <Text style={styles.buttonText}>Get Started Free</Text>
        </Pressable>
      </View>

      <View style={styles.cardsContainer}>
        <Pressable style={styles.card} onPress={() => router.push('/resume' as any)}>
          <Text style={styles.cardTitle}>📄 Resume ATS Checker</Text>
          <Text style={styles.cardDesc}>Get your ATS score in 10 seconds + suggestions to improve</Text>
          <Text style={styles.clickHint}>Tap to check →</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => router.push('/interview' as any)}>
          <Text style={styles.cardTitle}>🤖 AI Mock Interview</Text>
          <Text style={styles.cardDesc}>Practice HR + Technical rounds with AI feedback</Text>
          <Text style={styles.clickHint}>Tap to start →</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f' },
  header: { padding: 30, paddingTop: 80, alignItems: 'center' },
  logo: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  title: { color: 'white', fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#888', fontSize: 14, marginTop: 10, textAlign: 'center' },
  button: { backgroundColor: '#2563eb', padding: 18, borderRadius: 12, marginTop: 30, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  cardsContainer: { padding: 20, gap: 15 },
  card: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: '#2a2a3a' },
  cardTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  cardDesc: { color: '#888', fontSize: 14, marginTop: 8 },
  clickHint: { color: '#2563eb', fontSize: 12, marginTop: 12, fontWeight: 'bold' },
});