import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Aktivitas() {
  return (
    <View>
      <Header />
      <ImageBackground source={require("../assets/buatakt.jpg")} />
    </View>
  )
}

const styles = StyleSheet.create({})