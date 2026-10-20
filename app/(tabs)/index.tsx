import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.hero}>
        <Text style={styles.logo}>🎯 PlacementTwin</Text>
        <Text style={styles.title}>Your AI Placement Assistant</Text>
        <Text style={styles.subtitle}>Resume Analysis • Mock Interviews • ATS Score</Text>
        <Pressable style={styles.button} onPress={() => router.push('/two')}>
          <Text style={styles.buttonText}>Get Started Free</Text>
        </Pressable>
      </View>
      <View style={styles.features}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📄 Resume ATS Checker</Text>
          <Text style={styles.cardDesc}>Get your ATS score in 10 seconds</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🤖 AI Mock Interview</Text>
          <Text style={styles.cardDesc}>Practice HR + Technical rounds</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', minHeight: '100vh' as any },
  hero: { padding: 40, alignItems: 'center', backgroundColor: '#111', paddingTop: 60 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginTop: 12 },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center', marginTop: 8, marginBottom: 20 },
  button: { backgroundColor: '#5c5ce7', padding: 16, paddingHorizontal: 32, borderRadius: 12, marginTop: 16, width: '100%', maxWidth: 300, alignItems: 'center' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  features: { padding: 20, gap: 16 as any },
  card: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#2a2a2a' },
  cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  cardDesc: { color: '#888', marginTop: 6, fontSize: 14 },
});