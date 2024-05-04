import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header';

export default function About() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <Text>Aplikasi ini dibuat agar seseorang bersemangat dan teratur dalam berolahraga</Text>
      </View>
    );
  };