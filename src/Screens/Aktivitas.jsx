import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Aktivitas() {
  return (
    <View style={{padding: 20}}>
      <Header />
      <ImageBackground source={require("../assets/buatakt.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({})