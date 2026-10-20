import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  const router = useRouter();
  return (
    <View style={styles.outer}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inner}>
          <Text style={styles.badge}>🚀 PlacementTwin</Text>
          <Text style={styles.title}>Your AI Placement Assistant</Text>
          <Text style={styles.sub}>Powered by AWS - Bedrock, Lambda, S3</Text>
          
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>Crack Your Dream Job with AI</Text>
            <Text style={styles.heroSub}>Resume check, Mock Interviews, Coding, Aptitude - All in One OS</Text>
            <Pressable style={styles.mainBtn} onPress={() => router.push('/two' as any)}>
              <Text style={styles.mainBtnT}>Enter PlacementTwin OS →</Text>
            </Pressable>
          </View>

          <Pressable style={styles.smallBtn} onPress={() => router.push('/two' as any)}>
            <Text style={styles.smallBtnT}>Go to Dashboard</Text>
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#0a0a0f', alignItems: 'center' },
  content: { alignItems: 'center', paddingBottom: 50 },
  inner: { width: '100%', maxWidth: 480, padding: 20, paddingTop: 60 },
  badge: { color: '#60a5fa', fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  title: { color: 'white', fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  sub: { color: '#f59e0b', fontSize: 11, textAlign: 'center', marginTop: 8 },
  hero: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, marginTop: 30, borderWidth: 1, borderColor: '#333' },
  heroTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  heroSub: { color: '#888', fontSize: 12, marginTop: 8, lineHeight: 18 },
  mainBtn: { backgroundColor: '#2563eb', padding: 16, borderRadius: 12, marginTop: 20, alignItems: 'center' },
  mainBtnT: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  smallBtn: { backgroundColor: '#1a1a23', padding: 12, borderRadius: 10, marginTop: 15, alignItems: 'center', borderWidth: 1, borderColor: '#333' },
  smallBtnT: { color: '#60a5fa', fontWeight: 'bold' },
});