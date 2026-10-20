import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MegaDashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 PlacementTwin OS</Text>
      <Text style={styles.subtitle}>All 6 WORKING - Web Safe Version!</Text>

      {/* 1 */}
      <Link href={"/resume" as any} asChild>
        <Pressable style={styles.featureBoxBlue}>
          <Text style={styles.fTitle}>1. 📄 Resume ATS Intelligence →</Text>
          <Text style={styles.miniDesc}>Score: 84/100 • Tap to open</Text>
          <View style={styles.btn}><Text style={styles.btnT}>OPEN RESUME CHECKER</Text></View>
        </Pressable>
      </Link>

      {/* 2 */}
      <Link href={"/interview" as any} asChild>
        <Pressable style={styles.featureBoxBlue}>
          <Text style={styles.fTitle}>2. 🤖 AI Mock Interview →</Text>
          <Text style={styles.miniDesc}>50 Qs • Tap to open</Text>
          <View style={styles.btn}><Text style={styles.btnT}>START INTERVIEW</Text></View>
        </Pressable>
      </Link>

      {/* 3 */}
      <Link href={"/aptitude" as any} asChild>
        <Pressable style={styles.featureBoxOrange}>
          <Text style={styles.badge}>NEW 🔥 LIVE</Text>
          <Text style={styles.fTitle}>3. 🧠 Aptitude Lab →</Text>
          <Text style={styles.miniDesc}>TCS NQT • Tap for test</Text>
          <View style={styles.btnOrange}><Text style={styles.btnT}>START TEST</Text></View>
        </Pressable>
      </Link>

      {/* 4 */}
      <Link href={"/coding" as any} asChild>
        <Pressable style={styles.featureBoxGreen}>
          <Text style={styles.badgeGreen}>NEW 💻 LIVE</Text>
          <Text style={styles.fTitle}>4. 💻 Coding Practice →</Text>
          <Text style={styles.miniDesc}>DSA • Tap to code</Text>
          <View style={styles.btnGreen}><Text style={styles.btnT}>SOLVE & GET FEEDBACK</Text></View>
        </Pressable>
      </Link>

      {/* 5 */}
      <Link href={"/cover" as any} asChild>
        <Pressable style={styles.featureBoxPurple}>
          <Text style={styles.badgePurple}>NEW ✉️ LIVE</Text>
          <Text style={styles.fTitle}>5. ✉️ Cover Letter →</Text>
          <Text style={styles.miniDesc}>Generate in 5 sec • Tap</Text>
          <View style={styles.btnPurple}><Text style={styles.btnT}>GENERATE</Text></View>
        </Pressable>
      </Link>

      {/* 6 */}
      <Link href={"/tracker" as any} asChild>
        <Pressable style={styles.featureBoxBlue}>
          <Text style={styles.badgeBlue}>NEW 📊 LIVE</Text>
          <Text style={styles.fTitle}>6. 📊 Job Tracker →</Text>
          <Text style={styles.miniDesc}>12 → 5 → 2 Offers</Text>
          <View style={styles.trackRow}>
            <View style={styles.trackItem}><Text style={styles.trackNum}>12</Text></View>
            <View style={styles.trackItem}><Text style={styles.trackNum}>5</Text></View>
            <View style={styles.trackItemActive}><Text style={styles.trackNum}>2</Text></View>
          </View>
        </Pressable>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0f', padding: 16, paddingTop: 50 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#22c55e', fontSize: 11, textAlign: 'center', marginTop: 6, marginBottom: 20, fontWeight: 'bold' },
  featureBoxBlue: { backgroundColor: '#1a1a23', padding: 18, borderRadius: 16, marginBottom: 14, borderWidth: 2, borderColor: '#2563eb' },
  featureBoxOrange: { backgroundColor: '#1a1a23', padding: 18, borderRadius: 16, marginBottom: 14, borderWidth: 2, borderColor: '#f59e0b' },
  featureBoxGreen: { backgroundColor: '#1a1a23', padding: 18, borderRadius: 16, marginBottom: 14, borderWidth: 2, borderColor: '#22c55e' },
  featureBoxPurple: { backgroundColor: '#1a1a23', padding: 18, borderRadius: 16, marginBottom: 14, borderWidth: 2, borderColor: '#7c3aed' },
  fTitle: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  miniDesc: { color: '#aaa', fontSize: 12, marginTop: 6 },
  badge: { backgroundColor: '#f59e0b', color: 'black', alignSelf: 'flex-start', padding: 4, borderRadius: 6, marginBottom: 6, fontSize: 10, fontWeight: 'bold' },
  badgeGreen: { backgroundColor: '#22c55e', color: 'black', alignSelf: 'flex-start', padding: 4, borderRadius: 6, marginBottom: 6, fontSize: 10, fontWeight: 'bold' },
  badgePurple: { backgroundColor: '#7c3aed', color: 'white', alignSelf: 'flex-start', padding: 4, borderRadius: 6, marginBottom: 6, fontSize: 10, fontWeight: 'bold' },
  badgeBlue: { backgroundColor: '#2563eb', color: 'white', alignSelf: 'flex-start', padding: 4, borderRadius: 6, marginBottom: 6, fontSize: 10, fontWeight: 'bold' },
  btn: { backgroundColor: '#2563eb', padding: 14, borderRadius: 10, marginTop: 12, alignItems: 'center' },
  btnOrange: { backgroundColor: '#f59e0b', padding: 14, borderRadius: 10, marginTop: 12, alignItems: 'center' },
  btnGreen: { backgroundColor: '#22c55e', padding: 14, borderRadius: 10, marginTop: 12, alignItems: 'center' },
  btnPurple: { backgroundColor: '#7c3aed', padding: 14, borderRadius: 10, marginTop: 12, alignItems: 'center' },
  btnT: { color: 'white', fontWeight: 'bold', fontSize: 13 },
  trackRow: { flexDirection: 'row', marginTop: 12 },
  trackItem: { backgroundColor: '#1e1e2e', padding: 10, borderRadius: 10, marginRight: 8, width: 50, alignItems: 'center' },
  trackItemActive: { backgroundColor: '#1e3a2e', padding: 10, borderRadius: 10, marginRight: 8, width: 50, alignItems: 'center', borderWidth: 1, borderColor: '#22c55e' },
  trackNum: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});