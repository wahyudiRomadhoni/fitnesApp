import { View, Text, ScrollView} from 'react-native'
import React from 'react'

import Homework from '../components/Homework';
import Header from '../components/Header';



export default function Beranda() {
    return (
      <ScrollView contentContainerStyle={{padding:15}}>
        <Header />
        <Text style={{fontWeight:'bold', fontSize:25, marginTop:10, color:"gray"}}>Latihan</Text>
        <View>
          <View style={{paddingTop:25, borderColor:"black", borderBottomWidth:1, width:90}}>
          <Text style={{fontSize:17,}}>Untuk anda</Text>
          </View>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>Latihan Rumahan</Text>
        </View>
        <ScrollView style={{}} horizontal={true}>
        <Homework gambar={require ('../assets/pushup.jpg')} text={"push day"} keterangan={"18 mnt, pemula"}/>
        <Homework gambar={require ('../assets/abs.jpg')} text={"abs workout"} keterangan={"18 mnt, pemula"}/>
        <Homework gambar={require ('../assets/leg.jpg')} text={"push day"} keterangan={"18 mnt, pemula"}/>
        </ScrollView>
        <View style={{paddingTop:30}}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'black',}}>Latihan Gym</Text>
        </View>
        <ScrollView style={{}} horizontal={true}>
        <Homework gambar={require ('../assets/abs.jpg')} text={"Abs workout"} keterangan={"18 mnt, pemula"}/>
        <Homework gambar={require ('../assets/abs.jpg')} text={"Abs workout"} keterangan={"18 mnt, pemula"}/>
        <Homework gambar={require ('../assets/abs.jpg')} text={"Abs workout"} keterangan={"18 mnt, pemula"}/>
        </ScrollView>
      </ScrollView>
    );
  };
  