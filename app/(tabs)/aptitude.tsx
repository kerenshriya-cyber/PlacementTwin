import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Aptitude() {
  const [score, setScore] = useState(0);
  return (
    <ScrollView style={styles.c}>
      <Link href={"/two" as any} asChild><Pressable style={styles.back}><Text style={styles.backT}>← Back</Text></Pressable></Link>
      <Text style={styles.title}>🧠 Aptitude Lab - TCS NQT</Text>
      <View style={styles.qBox}>
        <Text style={styles.q}>Q1: If 3x + 5 = 20, what is x?</Text>
        <Pressable style={styles.opt} onPress={()=>setScore(1)}><Text style={styles.optT}>A) 5</Text></Pressable>
        <Pressable style={styles.opt}><Text style={styles.optT}>B) 10</Text></Pressable>
        <Pressable style={styles.opt}><Text style={styles.optT}>C) 15</Text></Pressable>
        {score===1 && <Text style={styles.correct}>✅ Correct! 3x=15, x=5 - You are NQT Ready!</Text>}
      </View>
      <View style={styles.stats}><Text style={styles.statsT}>Quant: 78% | Logical: 65% | Verbal: 82%</Text></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  c:{flex:1,backgroundColor:'#0a0a0f',padding:16,paddingTop:50}, back:{backgroundColor:'#1a1a23',padding:10,borderRadius:8,alignSelf:'flex-start'}, backT:{color:'white'},
  title:{color:'white',fontSize:20,fontWeight:'bold',marginTop:20,textAlign:'center'}, qBox:{backgroundColor:'#1a1a23',padding:16,borderRadius:16,marginTop:20,borderWidth:1,borderColor:'#f59e0b'},
  q:{color:'white',fontWeight:'bold'}, opt:{backgroundColor:'#0f0f14',padding:12,borderRadius:8,marginTop:10}, optT:{color:'#aaa'}, correct:{color:'#22c55e',marginTop:12,fontWeight:'bold'}, stats:{backgroundColor:'#1e293b',padding:12,borderRadius:10,marginTop:20}, statsT:{color:'#93c5fd',textAlign:'center',fontWeight:'bold'}
});