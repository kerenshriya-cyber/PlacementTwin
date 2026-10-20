import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function MegaDashboard() {
  const router = useRouter();
  const [score, setScore] = useState(84);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 PlacementTwin OS</Text>
      <Text style={styles.subtitle}>6-in-1 AI Placement Suite</Text>

      {/* FEATURE 1 - Resume */}
      <View style={styles.featureBox}>
        <Text style={styles.fTitle}>1. 📄 Resume ATS Intelligence</Text>
        <View style={styles.miniRow}>
          <View style={styles.circle}><Text style={styles.circleT}>{score}</Text></View>
          <Text style={styles.miniDesc}>Wipro: 91% Match ✅ • Missing: AWS</Text>
        </View>
      </View>

      {/* FEATURE 2 - Interview */}
      <View style={styles.featureBox}>
        <Text style={styles.fTitle}>2. 🤖 AI Mock Interview</Text>
        <Text style={styles.miniDesc}>HR + Technical + Company Specific • 50 Qs</Text>
        <View style={styles.chipRow}>
          <View style={styles.chip}><Text style={styles.chipT}>TCS</Text></View>
          <View style={styles.chip}><Text style={styles.chipT}>Infosys</Text></View>
          <View style={styles.chip}><Text style={styles.chipT}>Wipro</Text></View>
        </View>
      </View>

      {/* FEATURE 3 - NEW: Aptitude Test */}
      <View style={[styles.featureBox, {borderColor: '#f59e0b'}]}>
        <View style={styles.newBadge}><Text style={styles.newText}>NEW 🔥</Text></View>
        <Text style={styles.fTitle}>3. 🧠 Aptitude & Reasoning Lab</Text>
        <Text style={styles.miniDesc}>TCS NQT Pattern • 30 min tests</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}><Text style={styles.statN}>78%</Text><Text style={styles.statL}>Quant</Text></View>
          <View style={styles.stat}><Text style={styles.statN}>65%</Text><Text style={styles.statL}>Logical</Text></View>
          <View style={styles.stat}><Text style={styles.statN}>82%</Text><Text style={styles.statL}>Verbal</Text></View>
        </View>
        <Pressable style={styles.btnOrange}><Text style={styles.btnT}>Start NQT Mock Test →</Text></Pressable>
      </View>

      {/* FEATURE 4 - NEW: Coding */}
      <View style={[styles.featureBox, {borderColor: '#22c55e'}]}>
        <View style={styles.newBadgeGreen}><Text style={styles.newText}>NEW 💻</Text></View>
        <Text style={styles.fTitle}>4. 💻 Coding Practice + AI Review</Text>
        <View style={styles.codeBox}>
          <Text style={styles.codeQ}>Q: Two Sum - Find indices that sum to target</Text>
          <Text style={styles.codeLang}>Language: JavaScript • Difficulty: Easy</Text>
          <View style={styles.codePreview}><Text style={styles.codeT}>function twoSum(nums, target)...</Text></View>
        </View>
        <Pressable style={styles.btnGreen}><Text style={styles.btnT}>Solve & Get AI Feedback →</Text></Pressable>
      </View>

      {/* FEATURE 5 - NEW: Cover Letter */}
      <View style={[styles.featureBox, {borderColor: '#7c3aed'}]}>
        <Text style={styles.fTitle}>5. ✉️ AI Cover Letter + LinkedIn</Text>
        <View style={styles.insideSmall}>
          <Text style={styles.miniDesc}>Generate tailored cover letter in 5 seconds</Text>
          <TextInput style={styles.input} placeholder="Enter company name: e.g. TCS" placeholderTextColor="#666" />
          <View style={styles.linkScore}><Text style={styles.linkT}>LinkedIn Score: 62/100 ⚠️</Text><Text style={styles.linkSub}>Fix: Add banner, 3 projects, bio keywords</Text></View>
        </View>
        <Pressable style={styles.btnPurple}><Text style={styles.btnT}>Generate Cover Letter →</Text></Pressable>
      </View>

      {/* FEATURE 6 - NEW: Job Tracker */}
      <View style={styles.featureBox}>
        <Text style={styles.fTitle}>6. 📊 Job Application Tracker</Text>
        <View style={styles.tracker}>
          <View style={styles.trackItem}><Text style={styles.trackNum}>12</Text><Text style={styles.trackLabel}>Applied</Text></View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.trackItem}><Text style={styles.trackNum}>5</Text><Text style={styles.trackLabel}>Interviews</Text></View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.trackItemActive}><Text style={styles.trackNum}>2</Text><Text style={styles.trackLabel}>Offers 🎉</Text></View>
        </View>
        <View style={styles.jobList}><Text style={styles.jobName}>TCS Digital - Interview on 25th Oct</Text><Text style={styles.jobStatus}>● In Progress</Text></View>
        <View style={styles.jobList}><Text style={styles.jobName}>Wipro - Offer Received! 🎉</Text><Text style={styles.jobStatusGreen}>● Offer</Text></View>
      </View>

      <Pressable style={styles.backBtn} onPress={() => router.back()}><Text style={styles.backT}>← Back to Home</Text></Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 16, paddingTop: 50 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#888', fontSize: 12, textAlign: 'center', marginTop: 4, marginBottom: 20 },
  featureBox: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 16, marginBottom: 14, borderWidth: 1, borderColor: '#2a2a3a' },
  fTitle: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  miniDesc: { color: '#888', fontSize: 12, marginTop: 6 },
  miniRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  circle: { width: 45, height: 45, borderRadius: 22, backgroundColor: '#1e3a2e', borderWidth: 2, borderColor: '#22c55e', alignItems: 'center', justifyContent: 'center' },
  circleT: { color: '#22c55e', fontWeight: 'bold' },
  chipRow: { flexDirection: 'row', gap: 8, marginTop: 10 }, chip: { backgroundColor: '#1e293b', padding: 6, paddingHorizontal: 10, borderRadius: 20 }, chipT: { color: '#93c5fd', fontSize: 11 },
  newBadge: { backgroundColor: '#f59e0b', alignSelf: 'flex-start', padding: 3, paddingHorizontal: 8, borderRadius: 10, marginBottom: 8 }, newBadgeGreen: { backgroundColor: '#22c55e', alignSelf: 'flex-start', padding: 3, paddingHorizontal: 8, borderRadius: 10, marginBottom: 8 }, newText: { color: 'black', fontSize: 10, fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', gap: 8, marginTop: 12 }, stat: { flex: 1, backgroundColor: '#0f0f14', padding: 10, borderRadius: 10, alignItems: 'center' }, statN: { color: 'white', fontWeight: 'bold' }, statL: { color: '#666', fontSize: 10, marginTop: 2 },
  btnOrange: { backgroundColor: '#f59e0b', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnGreen: { backgroundColor: '#22c55e', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnPurple: { backgroundColor: '#7c3aed', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnT: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  codeBox: { backgroundColor: '#0f0f14', padding: 10, borderRadius: 8, marginTop: 10 }, codeQ: { color: 'white', fontSize: 12, fontWeight: 'bold' }, codeLang: { color: '#666', fontSize: 10, marginTop: 4 }, codePreview: { backgroundColor: '#1e1e2e', padding: 8, borderRadius: 6, marginTop: 8 }, codeT: { color: '#22c55e', fontSize: 11, fontFamily: 'monospace' },
  insideSmall: { backgroundColor: '#0f0f14', padding: 12, borderRadius: 10, marginTop: 10 }, input: { backgroundColor: '#1e1e2e', color: 'white', padding: 10, borderRadius: 8, marginTop: 10, fontSize: 12 },
  linkScore: { backgroundColor: '#2a1e0f', padding: 8, borderRadius: 8, marginTop: 10 }, linkT: { color: '#f59e0b', fontSize: 12, fontWeight: 'bold' }, linkSub: { color: '#888', fontSize: 10, marginTop: 2 },
  tracker: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }, trackItem: { backgroundColor: '#1e1e2e', padding: 10, borderRadius: 10, alignItems: 'center', flex: 1 }, trackItemActive: { backgroundColor: '#1e3a2e', padding: 10, borderRadius: 10, alignItems: 'center', flex: 1, borderWidth: 1, borderColor: '#22c55e' }, trackNum: { color: 'white', fontSize: 16, fontWeight: 'bold' }, trackLabel: { color: '#666', fontSize: 10, marginTop: 2 }, arrow: { color: '#666', marginHorizontal: 5 },
  jobList: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0f0f14', padding: 10, borderRadius: 8, marginTop: 8 }, jobName: { color: '#ddd', fontSize: 11 }, jobStatus: { color: '#f59e0b', fontSize: 11 }, jobStatusGreen: { color: '#22c55e', fontSize: 11 },
  backBtn: { alignItems: 'center', marginTop: 10, marginBottom: 40 }, backT: { color: '#2563eb', fontWeight: 'bold' },
});