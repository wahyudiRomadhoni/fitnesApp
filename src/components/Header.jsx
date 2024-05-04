import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <View style={{flexDirection:'row', width:330, justifyContent: 'space-between',}}>
        <View style={{backgroundColor:"#FCFFE0", padding:20, width:20, height:20, justifyContent:"center", alignItems:"center", borderRadius:50,}}>
        <FontAwesomeIcon icon={faUser} />
        </View>
        <View style={{flexDirection:'row', gap:5,}}>
        <FontAwesomeIcon size={25} icon={faBookmark} />
        <FontAwesomeIcon size={25} icon={faEnvelope} />
        </View>
        </View>
  )
}

const styles = StyleSheet.create({})