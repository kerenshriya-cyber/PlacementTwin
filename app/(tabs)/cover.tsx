import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Cover(){
 const [company,setCompany]=useState('TCS');
 return(
  <ScrollView style={styles.c}>
   <Link href={"/two" as any} asChild><Pressable style={styles.back}><Text style={styles.backT}>← Back</Text></Pressable></Link>
   <Text style={styles.title}>✉️ Cover Letter + LinkedIn Fixer</Text>
   <TextInput style={styles.input} value={company} onChangeText={setCompany} placeholder="Company name" placeholderTextColor="#666"/>
   <View style={styles.box}>
    <Text style={styles.genT}>Generated for {company}:</Text>
    <Text style={styles.letter}>{`Dear Hiring Manager at ${company},\n\nI am a final year CSE student passionate about MERN stack... My resume shows 84% ATS score and I solved 120 DSA problems.\n\nI would love to contribute to ${company}'s innovation.\n\nRegards`}</Text>
   </View>
   <View style={styles.linkBox}><Text style={styles.linkT}>LinkedIn Score: 62 → 92 After Fix</Text><Text style={styles.linkSub}>❌ Add banner ❌ Add 3 projects ❌ Add AWS keyword</Text></View>
   <Pressable style={styles.btn}><Text style={styles.btnT}>Copy Cover Letter</Text></Pressable>
  </ScrollView>
 );
}
const styles = StyleSheet.create({
 c:{flex:1,backgroundColor:'#0a0a0f',padding:16,paddingTop:50}, back:{backgroundColor:'#1a1a23',padding:10,borderRadius:8,alignSelf:'flex-start'}, backT:{color:'white'},
 title:{color:'white',fontSize:18,fontWeight:'bold',marginTop:20,textAlign:'center'}, input:{backgroundColor:'#1a1a23',color:'white',padding:14,borderRadius:10,marginTop:20,borderWidth:1,borderColor:'#7c3aed'},
 box:{backgroundColor:'#1a1a23',padding:16,borderRadius:16,marginTop:16,borderWidth:1,borderColor:'#7c3aed'}, genT:{color:'#a78bfa',fontWeight:'bold'}, letter:{color:'#ddd',fontSize:12,marginTop:10,lineHeight:18},
 linkBox:{backgroundColor:'#2a1e0f',padding:12,borderRadius:10,marginTop:16}, linkT:{color:'#f59e0b',fontWeight:'bold'}, linkSub:{color:'#888',fontSize:11,marginTop:6},
 btn:{backgroundColor:'#7c3aed',padding:14,borderRadius:10,marginTop:16,alignItems:'center'}, btnT:{color:'white',fontWeight:'bold'}
});