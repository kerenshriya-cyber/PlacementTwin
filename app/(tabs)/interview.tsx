import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Interview() {
  const router = useRouter();
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Pressable onPress={() => router.push('/two' as any)} style={styles.back}>
          <Text style={styles.backT}>← Back to Dashboard</Text>
        </Pressable>
        <Text style={styles.title}>🤖 AI Mock Interview</Text>
        <Text style={styles.sub}>Powered by AWS Bedrock (Claude)</Text>
        <View style={styles.card}>
          <Text style={styles.q}>Q1: Tell me about yourself?</Text>
          <Text style={styles.a}>AI will analyze your answer via AWS Bedrock...</Text>
        </View>
        <View style={styles.awsBadge}>
          <Text style={styles.awsT}>☁️ AWS Bedrock + Transcribe Connected</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#0a0a0f', alignItems: 'center' },
  inner: { width: '100%', maxWidth: 480, padding: 16, paddingTop: 60 },
  back: { backgroundColor: '#1a1a23', padding: 10, borderRadius: 8, alignSelf: 'flex-start', marginBottom: 20 },
  backT: { color: '#60a5fa', fontWeight: 'bold' },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  sub: { color: '#f59e0b', fontSize: 11, marginTop: 6 },
  card: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 12, marginTop: 20, borderWidth: 1, borderColor: '#333' },
  q: { color: 'white', fontWeight: 'bold' },
  a: { color: '#888', fontSize: 12, marginTop: 8 },
  awsBadge: { backgroundColor: '#1e293b', padding: 12, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: '#f59e0b' },
  awsT: { color: '#fbbf24', fontWeight: 'bold', fontSize: 11 },
});