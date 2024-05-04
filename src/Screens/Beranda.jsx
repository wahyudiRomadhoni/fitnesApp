import { View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Homework from '../components/Homework';



export default function Beranda() {
    return (
      <ScrollView contentContainerStyle={{padding:20}}>
        <View style={{flexDirection:'row', width:330, justifyContent: 'space-between',}}>
        <View style={{backgroundColor:"#FCFFE0", padding:20, width:20, height:20, justifyContent:"center", alignItems:"center", borderRadius:50,}}>
        <FontAwesomeIcon icon={faUser} />
        </View>
        <View style={{flexDirection:'row', gap:5,}}>
        <FontAwesomeIcon size={25} icon={faBookmark} />
        <FontAwesomeIcon size={25} icon={faEnvelope} />
        </View>
        </View>
        <Text style={{fontWeight:'bold', fontSize:25, marginTop:20, color:"gray"}}>Latihan</Text>
        <View>
          <View style={{paddingTop:35, borderColor:"black", borderBottomWidth:1, width:90}}>
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