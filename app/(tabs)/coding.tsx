import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Coding(){
 return(
  <ScrollView style={styles.c}>
   <Link href={"/two" as any} asChild><Pressable style={styles.back}><Text style={styles.backT}>← Back</Text></Pressable></Link>
   <Text style={styles.title}>💻 Coding + AI Code Review</Text>
   <View style={styles.box}>
    <Text style={styles.q}>Two Sum - Easy - TCS Asked</Text>
    <View style={styles.code}><Text style={styles.codeT}>{`function twoSum(nums, target) {\n  let map = {};\n  for(let i=0;i<nums.length;i++){\n    let diff = target - nums[i];\n    if(map[diff]!=null) return [map[diff], i];\n    map[nums[i]] = i;\n  }\n}`}</Text></View>
    <Pressable style={styles.btn}><Text style={styles.btnT}>✅ AI Review: 9/10 - Optimal O(n)!</Text></Pressable>
    <Text style={styles.tip}>💡 Tip for Interview: Explain HashMap logic, Wipro loves this!</Text>
   </View>
  </ScrollView>
 );
}
const styles = StyleSheet.create({
 c:{flex:1,backgroundColor:'#0a0a0f',padding:16,paddingTop:50}, back:{backgroundColor:'#1a1a23',padding:10,borderRadius:8,alignSelf:'flex-start'}, backT:{color:'white'},
 title:{color:'white',fontSize:20,fontWeight:'bold',marginTop:20,textAlign:'center'}, box:{backgroundColor:'#1a1a23',padding:16,borderRadius:16,marginTop:20,borderWidth:1,borderColor:'#22c55e'},
 q:{color:'white',fontWeight:'bold'}, code:{backgroundColor:'#0f0f14',padding:12,borderRadius:8,marginTop:10}, codeT:{color:'#22c55e',fontFamily:'monospace',fontSize:12},
 btn:{backgroundColor:'#22c55e',padding:12,borderRadius:8,marginTop:12,alignItems:'center'}, btnT:{color:'white',fontWeight:'bold'}, tip:{color:'#888',fontSize:11,marginTop:12}
});