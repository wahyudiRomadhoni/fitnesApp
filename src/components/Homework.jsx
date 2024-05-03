import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Homework({gambar, text, keterangan}) {
  return (
    <View style={styles.push1}>
      <ImageBackground source={gambar} style={styles.Image}>
      <Text style={styles.pushtext}>{text}</Text>
      <Text style={styles.pushtext1}>{keterangan}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    Image:{marginTop:30, width:250, height:200,},

    push1:{marginLeft:10 },
    
    pushtext:{color:"yellow", marginTop:150, paddingLeft:20,},

    pushtext1:{paddingLeft:20, color:"white"}
})