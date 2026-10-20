import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.logo}>🎯 PlacementTwin</Text>
        <Text style={styles.title}>Your AI Placement Assistant</Text>
        <Text style={styles.subtitle}>Resume Analysis • Mock Interviews • ATS Score</Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started Free</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.features}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📄 Resume ATS Checker</Text>
          <Text style={styles.cardDesc}>Get your ATS score in 10 seconds</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎤 AI Mock Interview</Text>
          <Text style={styles.cardDesc}>Practice HR + Technical rounds</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💼 Job Match</Text>
          <Text style={styles.cardDesc}>Find best roles for your profile</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', minHeight: '100vh' as any },
  hero: { padding: 40, alignItems: 'center', backgroundColor: '#111' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  title: { fontSize: 24, color: '#fff', fontWeight: '600', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', marginTop: 8, textAlign: 'center' },
  button: { backgroundColor: '#6c5ce7', padding: 16, borderRadius: 12, marginTop: 24, width: '100%' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  features: { padding: 20, gap: 16 },
  card: { backgroundColor: '#1a1a1a', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#222' },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  cardDesc: { color: '#888', marginTop: 6 }
});