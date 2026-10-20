import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 Welcome to PlacementTwin</Text>
      <Text style={styles.subtitle}>Your placement journey starts here!</Text>

      <View style={styles.stepBox}>
        <Text style={styles.stepTitle}>Step 1: Check Resume ATS</Text>
        <Text style={styles.stepDesc}>Upload your resume and get score out of 100 with improvement tips</Text>
        <Pressable style={styles.btn} onPress={() => router.push('/resume' as any)}>
          <Text style={styles.btnText}>Check Resume Now →</Text>
        </Pressable>
      </View>

      <View style={styles.stepBox}>
        <Text style={styles.stepTitle}>Step 2: AI Mock Interview</Text>
        <Text style={styles.stepDesc}>Practice 50+ HR & Technical questions with instant AI feedback</Text>
        <Pressable style={styles.btn} onPress={() => router.push('/interview' as any)}>
          <Text style={styles.btnText}>Start Interview →</Text>
        </Pressable>
      </View>

      <View style={styles.stepBox}>
        <Text style={styles.stepTitle}>Step 3: Get Placed!</Text>
        <Text style={styles.stepDesc}>Improve daily, track progress, and crack your dream company</Text>
        <View style={styles.progressBox}>
          <Text style={styles.progressText}>Your Progress: 20% Complete</Text>
          <View style={styles.bar}><View style={styles.barFill} /></View>
        </View>
      </View>

      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back to Home</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 25, paddingTop: 70 },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#888', fontSize: 14, textAlign: 'center', marginTop: 10, marginBottom: 30 },
  stepBox: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, marginBottom: 16, borderWidth: 1, borderColor: '#2a2a3a' },
  stepTitle: { color: 'white', fontSize: 17, fontWeight: 'bold' },
  stepDesc: { color: '#888', fontSize: 13, marginTop: 8, lineHeight: 18 },
  btn: { backgroundColor: '#2563eb', padding: 14, borderRadius: 10, marginTop: 15, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold' },
  progressBox: { marginTop: 15 },
  progressText: { color: '#22c55e', fontSize: 12, fontWeight: 'bold' },
  bar: { height: 6, backgroundColor: '#2a2a3a', borderRadius: 10, marginTop: 8 },
  barFill: { width: '20%', height: 6, backgroundColor: '#22c55e', borderRadius: 10 },
  backBtn: { marginTop: 20, marginBottom: 40, alignItems: 'center' },
  backText: { color: '#2563eb', fontWeight: 'bold' },
});