import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Tracker(){
 return(
  <ScrollView style={styles.c}>
   <Link href={"/two" as any} asChild><Pressable style={styles.back}><Text style={styles.backT}>← Back</Text></Pressable></Link>
   <Text style={styles.title}>📊 Job Tracker - Your Pipeline</Text>
   <View style={styles.pipe}><View style={styles.p}><Text style={styles.n}>12</Text><Text style={styles.l}>Applied</Text></View><Text style={styles.a}>→</Text><View style={styles.p}><Text style={styles.n}>5</Text><Text style={styles.l}>Interviews</Text></View><Text style={styles.a}>→</Text><View style={[styles.p,{borderColor:'#22c55e',borderWidth:1}]}><Text style={styles.n}>2</Text><Text style={styles.l}>Offers</Text></View></View>
   <View style={styles.job}><Text style={styles.jn}>TCS Digital - 25th Oct Interview</Text><Text style={styles.js}>● Scheduled</Text></View>
   <View style={styles.job}><Text style={styles.jn}>Infosys SP - Resume Shortlisted</Text><Text style={styles.jsY}>● In Review</Text></View>
   <View style={[styles.job,{borderColor:'#22c55e'}]}><Text style={styles.jn}>Wipro Elite - Offer ₹6.5LPA 🎉</Text><Text style={styles.jsG}>● Offer!</Text></View>
  </ScrollView>
 );
}
const styles = StyleSheet.create({
 c:{flex:1,backgroundColor:'#0a0a0f',padding:16,paddingTop:50}, back:{backgroundColor:'#1a1a23',padding:10,borderRadius:8,alignSelf:'flex-start'}, backT:{color:'white'},
 title:{color:'white',fontSize:18,fontWeight:'bold',marginTop:20,textAlign:'center'}, pipe:{flexDirection:'row',alignItems:'center',marginTop:20,justifyContent:'space-between'},
 p:{backgroundColor:'#1a1a23',padding:14,borderRadius:12,alignItems:'center',flex:1}, n:{color:'white',fontWeight:'bold',fontSize:18}, l:{color:'#666',fontSize:10,marginTop:2}, a:{color:'#666',marginHorizontal:6},
 job:{backgroundColor:'#1a1a23',padding:14,borderRadius:10,marginTop:12,flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderColor:'#2a2a3a'}, jn:{color:'#ddd',fontSize:12}, js:{color:'#60a5fa',fontSize:11}, jsY:{color:'#f59e0b',fontSize:11}, jsG:{color:'#22c55e',fontSize:11,fontWeight:'bold'}
});