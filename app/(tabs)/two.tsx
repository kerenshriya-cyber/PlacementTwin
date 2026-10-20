import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MegaDashboard() {
  return (
    <View style={styles.outer}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={styles.inner}>
          <Text style={styles.title}>🚀 PlacementTwin OS</Text>
          <Text style={styles.subtitle}>Your AI Placement Assistant</Text>

          <View style={styles.hero}>
            <Text style={styles.heroT}>12 Applied → 5 Interviews → 2 Offers 🎉</Text>
            <Link href={"/resume" as any} asChild>
              <Pressable style={styles.heroBtn}><Text style={styles.btnT}>Get Started Free</Text></Pressable>
            </Link>
          </View>

          {/* 1 */}
          <Link href={"/resume" as any} asChild>
            <Pressable style={styles.cardBlue}>
              <Text style={styles.cardTitle}>1. 📄 Resume ATS Intelligence</Text>
              <Text style={styles.cardDesc}>Score 84/100 • Wipro 91% Match</Text>
              <View style={styles.smallBtn}><Text style={styles.smallBtnT}>OPEN</Text></View>
            </Pressable>
          </Link>

          {/* 2 */}
          <Link href={"/interview" as any} asChild>
            <Pressable style={styles.cardBlue}>
              <Text style={styles.cardTitle}>2. 🤖 AI Mock Interview</Text>
              <Text style={styles.cardDesc}>HR + Technical • 50 Qs</Text>
              <View style={styles.smallBtn}><Text style={styles.smallBtnT}>START</Text></View>
            </Pressable>
          </Link>

          {/* 3 */}
          <Link href={"/aptitude" as any} asChild>
            <Pressable style={styles.cardOrange}>
              <Text style={styles.badge}>🔥 LIVE</Text>
              <Text style={styles.cardTitle}>3. 🧠 Aptitude Lab</Text>
              <Text style={styles.cardDesc}>TCS NQT • Quant 78%</Text>
              <View style={styles.smallBtnOrange}><Text style={styles.smallBtnT}>START TEST</Text></View>
            </Pressable>
          </Link>

          {/* 4 */}
          <Link href={"/coding" as any} asChild>
            <Pressable style={styles.cardGreen}>
              <Text style={styles.badgeGreen}>💻 LIVE</Text>
              <Text style={styles.cardTitle}>4. 💻 Coding Practice</Text>
              <Text style={styles.cardDesc}>Two Sum, DSA • AI Review</Text>
              <View style={styles.smallBtnGreen}><Text style={styles.smallBtnT}>CODE NOW</Text></View>
            </Pressable>
          </Link>

          {/* 5 */}
          <Link href={"/cover" as any} asChild>
            <Pressable style={styles.cardPurple}>
              <Text style={styles.badgePurple}>✉️ LIVE</Text>
              <Text style={styles.cardTitle}>5. Cover Letter</Text>
              <Text style={styles.cardDesc}>Generate in 5 sec</Text>
              <View style={styles.smallBtnPurple}><Text style={styles.smallBtnT}>GENERATE</Text></View>
            </Pressable>
          </Link>

          {/* 6 */}
          <Link href={"/tracker" as any} asChild>
            <Pressable style={styles.cardBlue}>
              <Text style={styles.badgeBlue}>📊 LIVE</Text>
              <Text style={styles.cardTitle}>6. Job Tracker</Text>
              <Text style={styles.cardDesc}>12 → 5 → 2 Offers</Text>
              <View style={styles.smallBtn}><Text style={styles.smallBtnT}>VIEW</Text></View>
            </Pressable>
          </Link>

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
  subtitle: { color: '#aaa', fontSize: 13, textAlign: 'center', marginTop: 6, marginBottom: 20 },
  hero: { backgroundColor: '#2563eb', padding: 16, borderRadius: 16, marginBottom: 16, alignItems: 'center' },
  heroT: { color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 10 },
  heroBtn: { backgroundColor: 'white', padding: 10, paddingHorizontal: 20, borderRadius: 20 },
  btnT: { color: '#2563eb', fontWeight: 'bold', fontSize: 13 },
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
  smallBtn: { backgroundColor: '#2563eb', padding: 8, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  smallBtnOrange: { backgroundColor: '#f59e0b', padding: 8, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  smallBtnGreen: { backgroundColor: '#22c55e', padding: 8, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  smallBtnPurple: { backgroundColor: '#7c3aed', padding: 8, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  smallBtnT: { color: 'white', fontWeight: 'bold', fontSize: 11 },
});