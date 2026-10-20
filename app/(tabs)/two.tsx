import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MegaDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 PlacementTwin OS</Text>
      <Text style={styles.subtitle}>Tap any feature to open - All 6 are clickable!</Text>

      {/* 1 - Resume - CLICKABLE */}
      <Pressable style={styles.featureBox} onPress={() => router.push('/resume' as any)}>
        <Text style={styles.fTitle}>1. 📄 Resume ATS Intelligence →</Text>
        <Text style={styles.miniDesc}>Score: 84/100 • Wipro 91% Match • Tap to open</Text>
        <View style={styles.tapHint}><Text style={styles.tapText}>TAP TO OPEN</Text></View>
      </Pressable>

      {/* 2 - Interview - CLICKABLE */}
      <Pressable style={styles.featureBox} onPress={() => router.push('/interview' as any)}>
        <Text style={styles.fTitle}>2. 🤖 AI Mock Interview →</Text>
        <Text style={styles.miniDesc}>HR + Tech + TCS/Infosys • 50 Qs • Tap to open</Text>
        <View style={styles.tapHint}><Text style={styles.tapText}>TAP TO OPEN</Text></View>
      </Pressable>

      {/* 3 - Aptitude - CLICKABLE */}
      <Pressable style={[styles.featureBox, {borderColor: '#f59e0b'}]} onPress={() => router.push('/aptitude' as any)}>
        <View style={styles.newBadge}><Text style={styles.newText}>NEW 🔥 CLICKABLE</Text></View>
        <Text style={styles.fTitle}>3. 🧠 Aptitude Lab →</Text>
        <Text style={styles.miniDesc}>TCS NQT • Quant 78% • Logical 65% • Tap for test</Text>
        <View style={styles.btnOrange}><Text style={styles.btnT}>Start NQT Mock Test</Text></View>
      </Pressable>

      {/* 4 - Coding - CLICKABLE */}
      <Pressable style={[styles.featureBox, {borderColor: '#22c55e'}]} onPress={() => router.push('/coding' as any)}>
        <View style={styles.newBadgeGreen}><Text style={styles.newText}>NEW 💻 CLICKABLE</Text></View>
        <Text style={styles.fTitle}>4. 💻 Coding Practice →</Text>
        <Text style={styles.miniDesc}>Two Sum, DSA, AI Review • Tap to code</Text>
        <View style={styles.btnGreen}><Text style={styles.btnT}>Solve & Get AI Feedback</Text></View>
      </Pressable>

      {/* 5 - Cover Letter - CLICKABLE */}
      <Pressable style={[styles.featureBox, {borderColor: '#7c3aed'}]} onPress={() => router.push('/cover' as any)}>
        <Text style={styles.fTitle}>5. ✉️ Cover Letter + LinkedIn →</Text>
        <Text style={styles.miniDesc}>Generate in 5 sec • LinkedIn Score 62 • Tap to fix</Text>
        <View style={styles.btnPurple}><Text style={styles.btnT}>Generate Cover Letter</Text></View>
      </Pressable>

      {/* 6 - Job Tracker - CLICKABLE */}
      <Pressable style={styles.featureBox} onPress={() => router.push('/tracker' as any)}>
        <Text style={styles.fTitle}>6. 📊 Job Tracker →</Text>
        <Text style={styles.miniDesc}>12 Applied → 5 Interviews → 2 Offers 🎉 • Tap to view</Text>
        <View style={styles.tracker}>
          <View style={styles.trackItem}><Text style={styles.trackNum}>12</Text><Text style={styles.trackLabel}>Applied</Text></View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.trackItem}><Text style={styles.trackNum}>5</Text><Text style={styles.trackLabel}>Interviews</Text></View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.trackItemActive}><Text style={styles.trackNum}>2</Text><Text style={styles.trackLabel}>Offers</Text></View>
        </View>
      </Pressable>

      <Text style={styles.helpText}>If page says "Unmatched Route" - we need to create that file, tell me which number you tapped!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 16, paddingTop: 50 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#22c55e', fontSize: 12, textAlign: 'center', marginTop: 4, marginBottom: 20, fontWeight: 'bold' },
  featureBox: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 16, marginBottom: 14, borderWidth: 2, borderColor: '#2a2a3a' },
  fTitle: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  miniDesc: { color: '#888', fontSize: 12, marginTop: 6 },
  tapHint: { backgroundColor: '#2563eb', padding: 6, borderRadius: 6, marginTop: 10, alignSelf: 'flex-start' }, tapText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  newBadge: { backgroundColor: '#f59e0b', alignSelf: 'flex-start', padding: 3, paddingHorizontal: 8, borderRadius: 10, marginBottom: 8 }, newBadgeGreen: { backgroundColor: '#22c55e', alignSelf: 'flex-start', padding: 3, paddingHorizontal: 8, borderRadius: 10, marginBottom: 8 }, newText: { color: 'black', fontSize: 10, fontWeight: 'bold' },
  btnOrange: { backgroundColor: '#f59e0b', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnGreen: { backgroundColor: '#22c55e', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnPurple: { backgroundColor: '#7c3aed', padding: 12, borderRadius: 10, marginTop: 12, alignItems: 'center' }, btnT: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  tracker: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }, trackItem: { backgroundColor: '#1e1e2e', padding: 10, borderRadius: 10, alignItems: 'center', flex: 1 }, trackItemActive: { backgroundColor: '#1e3a2e', padding: 10, borderRadius: 10, alignItems: 'center', flex: 1, borderWidth: 1, borderColor: '#22c55e' }, trackNum: { color: 'white', fontSize: 16, fontWeight: 'bold' }, trackLabel: { color: '#666', fontSize: 10, marginTop: 2 }, arrow: { color: '#666', marginHorizontal: 5 },
  helpText: { color: '#666', fontSize: 11, textAlign: 'center', marginTop: 20, marginBottom: 40 },
});