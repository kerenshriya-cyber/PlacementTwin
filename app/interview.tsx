import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function InterviewScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖 AI Mock Interview</Text>
      <Text style={styles.desc}>Practice with AI - Get instant feedback</Text>

      <View style={styles.questionBox}>
        <Text style={styles.qLabel}>Question 1/5</Text>
        <Text style={styles.question}>Tell me about yourself?</Text>
      </View>

      <Pressable style={styles.answerBtn}>
        <Text style={styles.answerText}>🎤 Start Speaking...</Text>
      </Pressable>

      <View style={styles.feedback}>
        <Text style={styles.feedbackTitle}>AI Feedback will appear here</Text>
        <Text style={styles.feedbackText}>- Good structure ✅{'\n'}- Add more projects{'\n'}- Speak louder</Text>
      </View>

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
  questionBox: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, marginTop: 30 },
  qLabel: { color: '#2563eb', fontSize: 12, fontWeight: 'bold' },
  question: { color: 'white', fontSize: 18, marginTop: 10 },
  answerBtn: { backgroundColor: '#2563eb', padding: 18, borderRadius: 12, marginTop: 20, alignItems: 'center' },
  answerText: { color: 'white', fontWeight: 'bold' },
  feedback: { backgroundColor: '#1a1a23', padding: 20, borderRadius: 16, marginTop: 20 },
  feedbackTitle: { color: 'white', fontWeight: 'bold' },
  feedbackText: { color: '#888', marginTop: 10, lineHeight: 22 },
  backBtn: { marginTop: 30 },
  backText: { color: '#2563eb', fontWeight: 'bold' },
});