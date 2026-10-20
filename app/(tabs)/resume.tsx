import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ResumePage() {
  const router = useRouter();
  return (
    <View style={styles.outer}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.inner}>
          <Pressable onPress={() => router.push('/two' as any)} style={styles.backBtn}>
            <Text style={styles.backT}>← Back to Dashboard</Text>
          </Pressable>

          <Text style={styles.title}>📄 Resume ATS Checker</Text>
          <Text style={styles.sub}>Upload your resume to get ATS score</Text>

          <View style={styles.uploadBox}>
            <Text style={styles.uploadT}>📤 Tap to Upload Resume (PDF)</Text>
            <Text style={styles.uploadSub}>Supports: PDF, DOCX</Text>
          </View>

          <View style={styles.scoreBox}>
            <Text style={styles.scoreT}>Your ATS Score: 78/100</Text>
            <Text style={styles.tip}>💡 Tip: Add more keywords like React, Node.js</Text>
            <Text style={styles.tip}>💡 Tip: Use action verbs</Text>
          </View>

          <View style={styles.awsBadge}>
            <Text style={styles.awsT}>☁️ Connected to AWS S3 Bucket</Text>
            <Text style={styles.awsSub}>placement-twin-bucket-kerens</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#0a0a0f', alignItems: 'center' },
  scroll: { flex: 1, width: '100%' },
  content: { alignItems: 'center', paddingBottom: 100 },
  inner: { width: '100%', maxWidth: 480, padding: 16, paddingTop: 50 },
  backBtn: { backgroundColor: '#1a1a23', padding: 10, borderRadius: 8, alignSelf: 'flex-start', marginBottom: 20 },
  backT: { color: '#60a5fa', fontWeight: 'bold' },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  sub: { color: '#888', fontSize: 12, marginTop: 6 },
  uploadBox: { borderWidth: 2, borderColor: '#3b82f6', borderStyle: 'dashed', padding: 30, borderRadius: 12, marginTop: 20, alignItems: 'center', backgroundColor: '#1a1a23' },
  uploadT: { color: 'white', fontWeight: 'bold' },
  uploadSub: { color: '#888', fontSize: 11, marginTop: 6 },
  scoreBox: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 12, marginTop: 16, borderWidth: 1, borderColor: '#2a2a3a' },
  scoreT: { color: '#22c55e', fontWeight: 'bold', fontSize: 16 },
  tip: { color: '#aaa', fontSize: 12, marginTop: 8 },
  awsBadge: { backgroundColor: '#1e293b', padding: 12, borderRadius: 10, marginTop: 20, borderWidth: 1, borderColor: '#f59e0b' },
  awsT: { color: '#fbbf24', fontWeight: 'bold', fontSize: 12 },
  awsSub: { color: '#888', fontSize: 10, marginTop: 4 },
});