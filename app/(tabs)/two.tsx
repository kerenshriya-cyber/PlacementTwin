import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function GetStartedScreen() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [tab, setTab] = useState('HR');
  const [answer, setAnswer] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 PlacementTwin Dashboard</Text>
      <Text style={styles.subtitle}>Everything you need to get placed - in one page!</Text>

      {/* ========== STEP 1: SUPER DETAILED ========== */}
      <View style={styles.stepBox}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>Step 1: Resume ATS Intelligence</Text>
          <Text style={styles.badge}>AI Powered</Text>
        </View>
        
        <View style={styles.insideBox}>
          {/* Upload Area */}
          <Pressable style={styles.uploadBig} onPress={() => setScore(84)}>
            <Text style={styles.uploadIcon}>📄</Text>
            <Text style={styles.uploadBigText}>Drop your resume here</Text>
            <Text style={styles.uploadSmall}>PDF, DOCX • Max 5MB • Instant analysis</Text>
            <View style={styles.uploadBtn}><Text style={styles.uploadBtnText}>Browse Files</Text></View>
          </Pressable>

          {/* Score Circle */}
          {score > 0 && (
            <>
              <View style={styles.scoreRow}>
                <View style={styles.circle}><Text style={styles.circleText}>{score}</Text><Text style={styles.circleSmall}>/100</Text></View>
                <View style={{flex: 1, marginLeft: 15}}>
                  <Text style={styles.scoreLabel}>ATS Score: Good! 🎉</Text>
                  <Text style={styles.scoreSub}>Top 25% of candidates</Text>
                  <View style={styles.bar}><View style={[styles.barFill, {width: `${score}%`}]} /></View>
                </View>
              </View>

              {/* Detailed Breakdown Inside */}
              <Text style={styles.detailTitle}>📊 Detailed Breakdown:</Text>
              <View style={styles.checkRow}><Text style={styles.checkText}>✅ Keywords Match</Text><Text style={styles.checkScore}>18/20</Text></View>
              <View style={styles.checkRow}><Text style={styles.checkText}>✅ Formatting</Text><Text style={styles.checkScore}>19/20</Text></View>
              <View style={styles.checkRow}><Text style={styles.checkText}>⚠️ Experience Depth</Text><Text style={styles.checkScoreWarn}>14/20</Text></View>
              <View style={styles.checkRow}><Text style={styles.checkText}>❌ Missing Skills: AWS, Docker</Text><Text style={styles.checkScoreBad}>12/20</Text></View>

              <Text style={styles.detailTitle}>💼 Job Match:</Text>
              <View style={styles.jobChip}><Text style={styles.jobChipText}>TCS - 82% Match</Text></View>
              <View style={styles.jobChip}><Text style={styles.jobChipText}>Infosys - 76% Match</Text></View>
              <View style={styles.jobChip}><Text style={styles.jobChipText}>Wipro - 91% Match ✅</Text></View>
            </>
          )}
        </View>
      </View>

      {/* ========== STEP 2: SUPER DETAILED ========== */}
      <View style={styles.stepBox}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>Step 2: AI Mock Interview Lab</Text>
          <Text style={[styles.badge, {backgroundColor: '#7c3aed'}]}>Live AI</Text>
        </View>

        <View style={styles.insideBox}>
          {/* Category Tabs */}
          <View style={styles.tabRow}>
            <Pressable onPress={() => setTab('HR')} style={[styles.tab, tab === 'HR' && styles.tabActive]}><Text style={styles.tabText}>HR Round</Text></Pressable>
            <Pressable onPress={() => setTab('Tech')} style={[styles.tab, tab === 'Tech' && styles.tabActive]}><Text style={styles.tabText}>Technical</Text></Pressable>
            <Pressable onPress={() => setTab('Company')} style={[styles.tab, tab === 'Company' && styles.tabActive]}><Text style={styles.tabText}>Company Specific</Text></Pressable>
          </View>

          {/* Question Display */}
          <View style={styles.questionCard}>
            <Text style={styles.qMeta}>Question 3/50 • {tab} • Medium • 2 min</Text>
            <Text style={styles.questionBig}>
              {tab === 'HR' ? 'Where do you see yourself in 5 years?' : tab === 'Tech' ? 'Explain closures in JavaScript with example?' : 'Why should we hire you for TCS?'}
            </Text>
            <View style={styles.timer}><Text style={styles.timerText}>⏱️ 00:42 / 02:00</Text></View>
          </View>

          {/* Answer Area */}
          <TextInput 
            style={styles.inputBig}
            placeholder="Type your answer or click mic to speak..."
            placeholderTextColor="#666"
            value={answer}
            onChangeText={setAnswer}
            multiline
          />
          <View style={styles.actionRow}>
            <Pressable style={styles.micBtn}><Text style={styles.micText}>🎤 Speak</Text></Pressable>
            <Pressable style={styles.hintBtn}><Text style={styles.hintText}>💡 Get Hint</Text></Pressable>
            <Pressable style={styles.submitBtn}><Text style={styles.submitText}>Submit →</Text></Pressable>
          </View>

          {/* AI Feedback */}
          {answer.length > 15 && (
            <View style={styles.feedbackBox}>
              <Text style={styles.feedbackTitle}>🤖 AI Analysis - Score: 7.5/10</Text>
              <Text style={styles.fText}>✅ Strength: Clear structure, good confidence</Text>
              <Text style={styles.fText}>✅ Used STAR method</Text>
              <Text style={styles.fText}>⚠️ Improve: Add numbers (e.g., "improved by 40%")</Text>
              <Text style={styles.fText}>💡 Pro Tip: Mention team leadership</Text>
              <View style={styles.voiceWave}><Text style={styles.waveText}>〰️〰️〰️ Voice: Good pace, low filler words</Text></View>
            </View>
          )}

          <Text style={styles.detailTitle}>🏢 Company-wise Questions:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.companyCard}><Text style={styles.compText}>TCS NQT</Text><Text style={styles.compSub}>12 Qs</Text></View>
            <View style={styles.companyCard}><Text style={styles.compText}>Infosys SP</Text><Text style={styles.compSub}>15 Qs</Text></View>
            <View style={styles.companyCard}><Text style={styles.compText}>Wipro Elite</Text><Text style={styles.compSub}>10 Qs</Text></View>
            <View style={styles.companyCard}><Text style={styles.compText}>Accenture</Text><Text style={styles.compSub}>18 Qs</Text></View>
          </ScrollView>
        </View>
      </View>

      {/* Step 3 */}
      <View style={styles.stepBox}>
        <Text style={styles.stepTitle}>Step 3: Track & Get Placed! 🎯</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>Resumes Checked</Text></View>
          <View style={styles.stat}><Text style={styles.statNum}>34</Text><Text style={styles.statLabel}>Interviews Done</Text></View>
          <View style={styles.stat}><Text style={styles.statNum}>84%</Text><Text style={styles.statLabel}>Avg Score</Text></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 16, paddingTop: 50 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#888', fontSize: 12, textAlign: 'center', marginTop: 6, marginBottom: 20 },
  stepBox: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 16, marginBottom: 16, borderWidth: 1, borderColor: '#2a2a3a' },
  stepHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  stepTitle: { color: 'white', fontSize: 15, fontWeight: 'bold', flex: 1 },
  badge: { backgroundColor: '#2563eb', color: 'white', fontSize: 9, padding: 4, paddingHorizontal: 8, borderRadius: 20, fontWeight: 'bold', overflow: 'hidden' },
  insideBox: { backgroundColor: '#0f0f14', padding: 14, borderRadius: 12, marginTop: 14, borderWidth: 1, borderColor: '#333' },
  uploadBig: { backgroundColor: '#1a1a2e', borderWidth: 2, borderColor: '#2563eb', borderStyle: 'dashed', padding: 20, borderRadius: 12, alignItems: 'center' },
  uploadIcon: { fontSize: 32 }, uploadBigText: { color: 'white', fontWeight: 'bold', marginTop: 8 }, uploadSmall: { color: '#666', fontSize: 11, marginTop: 4 },
  uploadBtn: { backgroundColor: '#2563eb', padding: 8, paddingHorizontal: 16, borderRadius: 8, marginTop: 12 }, uploadBtnText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  scoreRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16 }, circle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#1e3a2e', borderWidth: 3, borderColor: '#22c55e', alignItems: 'center', justifyContent: 'center' },
  circleText: { color: '#22c55e', fontSize: 20, fontWeight: 'bold' }, circleSmall: { color: '#22c55e', fontSize: 10 },
  scoreLabel: { color: 'white', fontWeight: 'bold', fontSize: 14 }, scoreSub: { color: '#888', fontSize: 11, marginTop: 2 },
  bar: { height: 6, backgroundColor: '#2a2a3a', borderRadius: 10, marginTop: 8 }, barFill: { height: 6, backgroundColor: '#22c55e', borderRadius: 10 },
  detailTitle: { color: '#aaa', fontSize: 12, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  checkRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1e1e2e', padding: 10, borderRadius: 8, marginBottom: 6 },
  checkText: { color: '#ddd', fontSize: 12 }, checkScore: { color: '#22c55e', fontSize: 12, fontWeight: 'bold' }, checkScoreWarn: { color: '#f59e0b', fontSize: 12, fontWeight: 'bold' }, checkScoreBad: { color: '#ef4444', fontSize: 12, fontWeight: 'bold' },
  jobChip: { backgroundColor: '#1e293b', padding: 8, borderRadius: 8, marginBottom: 6 }, jobChipText: { color: '#93c5fd', fontSize: 12 },
  tabRow: { flexDirection: 'row', gap: 8 }, tab: { padding: 8, paddingHorizontal: 12, backgroundColor: '#1e1e2e', borderRadius: 20 }, tabActive: { backgroundColor: '#2563eb' }, tabText: { color: 'white', fontSize: 11, fontWeight: 'bold' },
  questionCard: { backgroundColor: '#1e1e2e', padding: 14, borderRadius: 10, marginTop: 12 }, qMeta: { color: '#666', fontSize: 10 }, questionBig: { color: 'white', fontSize: 14, fontWeight: 'bold', marginTop: 8, lineHeight: 20 },
  timer: { backgroundColor: '#2a2a3a', alignSelf: 'flex-start', padding: 4, paddingHorizontal: 8, borderRadius: 12, marginTop: 10 }, timerText: { color: '#f59e0b', fontSize: 10, fontWeight: 'bold' },
  inputBig: { backgroundColor: '#1e1e2e', color: 'white', padding: 12, borderRadius: 8, marginTop: 12, minHeight: 70, textAlignVertical: 'top', fontSize: 13 },
  actionRow: { flexDirection: 'row', gap: 8, marginTop: 10 }, micBtn: { flex: 1, backgroundColor: '#1e1e2e', padding: 10, borderRadius: 8, alignItems: 'center' }, micText: { color: 'white', fontSize: 12 },
  hintBtn: { flex: 1, backgroundColor: '#1e1e2e', padding: 10, borderRadius: 8, alignItems: 'center' }, hintText: { color: '#aaa', fontSize: 12 },
  submitBtn: { flex: 1.5, backgroundColor: '#2563eb', padding: 10, borderRadius: 8, alignItems: 'center' }, submitText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  feedbackBox: { backgroundColor: '#1a2a1a', padding: 12, borderRadius: 8, marginTop: 12, borderWidth: 1, borderColor: '#22c55e' },
  feedbackTitle: { color: '#22c55e', fontWeight: 'bold', fontSize: 13 }, fText: { color: '#aaa', fontSize: 11, marginTop: 6 }, voiceWave: { marginTop: 8, backgroundColor: '#0f1a0f', padding: 6, borderRadius: 6 }, waveText: { color: '#666', fontSize: 10 },
  companyCard: { backgroundColor: '#1e1e2e', padding: 12, borderRadius: 10, marginRight: 8, minWidth: 90, alignItems: 'center' }, compText: { color: 'white', fontSize: 12, fontWeight: 'bold' }, compSub: { color: '#666', fontSize: 10, marginTop: 2 },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 12 }, stat: { flex: 1, backgroundColor: '#0f0f14', padding: 14, borderRadius: 10, alignItems: 'center' }, statNum: { color: '#2563eb', fontSize: 20, fontWeight: 'bold' }, statLabel: { color: '#666', fontSize: 10, marginTop: 4, textAlign: 'center' },
});