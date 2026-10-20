import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MegaDashboard() {
  const router = useRouter();

  return (
    <View style={styles.outer}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.inner}>
          <Text style={styles.title}>🚀 PlacementTwin OS</Text>
          <Text style={styles.subtitle}>Click fix - Now works on web!</Text>

          {/* 1 - Resume */}
          <Pressable style={styles.cardBlue} onPress={() => router.push('/resume' as any)}>
            <Text style={styles.cardTitle}>1. 📄 Resume ATS Intelligence</Text>
            <Text style={styles.cardDesc}>Score 84/100 • Tap to open</Text>
            <View style={styles.btn}><Text style={styles.btnT}>OPEN</Text></View>
          </Pressable>

          {/* 2 - Interview */}
          <Pressable style={styles.cardBlue} onPress={() => router.push('/interview' as any)}>
            <Text style={styles.cardTitle}>2. 🤖 AI Mock Interview</Text>
            <Text style={styles.cardDesc}>50 Qs • Tap to open</Text>
            <View style={styles.btn}><Text style={styles.btnT}>START</Text></View>
          </Pressable>

          {/* 3 - Aptitude */}
          <Pressable style={styles.cardOrange} onPress={() => router.push('/aptitude' as any)}>
            <Text style={styles.badge}>NEW 🔥</Text>
            <Text style={styles.cardTitle}>3. 🧠 Aptitude Lab</Text>
            <Text style={styles.cardDesc}>TCS NQT • Tap for test</Text>
            <View style={styles.btnOrange}><Text style={styles.btnT}>START TEST</Text></View>
          </Pressable>

          {/* 4 - Coding */}
          <Pressable style={styles.cardGreen} onPress={() => router.push('/coding' as any)}>
            <Text style={styles.badgeGreen}>NEW 💻</Text>
            <Text style={styles.cardTitle}>4. 💻 Coding Practice</Text>
            <Text style={styles.cardDesc}>DSA • Tap to code</Text>
            <View style={styles.btnGreen}><Text style={styles.btnT}>CODE NOW</Text></View>
          </Pressable>

          {/* 5 - Cover */}
          <Pressable style={styles.cardPurple} onPress={() => router.push('/cover' as any)}>
            <Text style={styles.badgePurple}>NEW ✉️</Text>
            <Text style={styles.cardTitle}>5. Cover Letter</Text>
            <Text style={styles.cardDesc}>Generate in 5 sec</Text>
            <View style={styles.btnPurple}><Text style={styles.btnT}>GENERATE</Text></View>
          </Pressable>

          {/* 6 - Tracker */}
          <Pressable style={styles.cardBlue} onPress={() => router.push('/tracker' as any)}>
            <Text style={styles.badgeBlue}>NEW 📊</Text>
            <Text style={styles.cardTitle}>6. Job Tracker</Text>
            <Text style={styles.cardDesc}>12 → 5 → 2 Offers</Text>
            <View style={styles.btn}><Text style={styles.btnT}>VIEW</Text></View>
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#0a0a0f', alignItems: 'center' },
  scroll: { flex: 1, width: '100%' },
  content: { alignItems: 'center', paddingBottom: 100 },
  inner: { width: '100%', maxWidth: 480, padding: 16, paddingTop: 40 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: '#22c55e', fontSize: 11, textAlign: 'center', marginTop: 6, marginBottom: 20, fontWeight: 'bold' },
  cardBlue: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#2563eb' },
  cardOrange: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#f59e0b' },
  cardGreen: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#22c55e' },
  cardPurple: { backgroundColor: '#1a1a23', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#7c3aed' },
  cardTitle: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  cardDesc: { color: '#888', fontSize: 11, marginTop: 4 },
  badge: { backgroundColor: '#f59e0b', color: '#000', alignSelf: 'flex-start', padding: 2, paddingHorizontal: 6, borderRadius: 4, fontSize: 9, fontWeight: 'bold', marginBottom: 6 },
  badgeGreen: { backgroundColor: '#22c55e', color: '#000', alignSelf: 'flex-start', padding: 2, paddingHorizontal: 6, borderRadius: 4, fontSize: 9, fontWeight: 'bold', marginBottom: 6 },
  badgePurple: { backgroundColor: '#7c3aed', color: '#fff', alignSelf: 'flex-start', padding: 2, paddingHorizontal: 6, borderRadius: 4, fontSize: 9, fontWeight: 'bold', marginBottom: 6 },
  badgeBlue: { backgroundColor: '#2563eb', color: '#fff', alignSelf: 'flex-start', padding: 2, paddingHorizontal: 6, borderRadius: 4, fontSize: 9, fontWeight: 'bold', marginBottom: 6 },
  btn: { backgroundColor: '#2563eb', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  btnOrange: { backgroundColor: '#f59e0b', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  btnGreen: { backgroundColor: '#22c55e', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  btnPurple: { backgroundColor: '#7c3aed', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  btnT: { color: 'white', fontWeight: 'bold', fontSize: 11 },
});