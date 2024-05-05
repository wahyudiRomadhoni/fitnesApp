import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Aktiv from '../components/Aktiv'
import Header from '../components/Header'

export default function Aktivitas() {
  return (
    <View style={{padding: 20}}>
      <Header />
      <Text style={styles.Aktivitas}>Aktivitas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Aktivitas:{fontWeight:'bold', fontSize:25, marginTop:40, color:"black"}
})