import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResumeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Resume ATS Checker</Text>
      <Text style={styles.desc}>Upload your resume to get ATS score</Text>
      
      <View style={styles.uploadBox}>
        <Text style={styles.uploadText}>📤 Tap to Upload Resume (PDF)</Text>
        <Text style={styles.small}>Supports: PDF, DOCX</Text>
      </View>

      <Pressable style={styles.scoreBox}>
        <Text style={styles.score}>Your ATS Score: 78/100</Text>
        <Text style={styles.tip}>💡 Tip: Add more keywords like React, Node.js</Text>
        <Text style={styles.tip}>💡 Tip: Use action verbs</Text>
      </Pressable>

      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 30, paddingTop: 80 },
  title: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  desc: { color: '#888', marginTop: 10 },
  uploadBox: { backgroundColor: '#1a1a23', borderWidth: 2, borderColor: '#2563eb', borderStyle: 'dashed', padding: 40, borderRadius: 16, marginTop: 30, alignItems: 'center' },
  uploadText: { color: 'white', fontWeight: 'bold' },
  small: { color: '#666', marginTop: 5, fontSize: 12 },
  scoreBox: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, marginTop: 20 },
  score: { color: '#22c55e', fontSize: 18, fontWeight: 'bold' },
  tip: { color: '#aaa', marginTop: 10 },
  backBtn: { marginTop: 40 },
  backText: { color: '#2563eb', fontWeight: 'bold' },
});