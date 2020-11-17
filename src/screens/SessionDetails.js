import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-material-dropdown';
import {useNavigation} from '@react-navigation/native';
function SessionDetails() {
    const navigation = useNavigation();
    let data = [{
        value: 'غرفة تدريس',
      }, {
        value: 'غرفة عصف ذهني',
      }, {
        value: 'غرفة اجتماع',
      }];
  
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.contendHeader}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('profile')}
                        >
                             <Icon size={35} color='#fff' name="menu" style={styles.icon}/>
                        </TouchableOpacity>
                        <Text style={{alignItems:'center',marginTop:9,marginLeft:10,fontSize:17,fontWeight:'bold',color:'#fff'}}>تفاصيل الجلسة</Text>
                    </View>
                </View>
                <View style={styles.contend}>
                    <TextInput 
                        keyboardType='number-pad'
                        placeholder="كودالجلسة..."
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="وصف..."
                        style={styles.input}
                    />
                    <TextInput 
                        keyboardType='number-pad'
                        placeholder="عدد الخانات..."
                        style={styles.input}
                    />
                    <Dropdown
                        label='نوع الغرفة '
                        data={data}
                    />
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => navigation.navigate('sessionDetails')}
                    >
                        <Text style={styles.titleBtn}> حفظ</Text>
                    </TouchableOpacity>
                </View>
            </View>
         );
    
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 153, 255,0.1)'
    },
    header:{
        width:'100%',
        height:50,
        backgroundColor:'rgba(0, 153, 255,0.2)',
        justifyContent:'center'
    },
    contendHeader:{
        flexDirection:'row',
        
    },
    icon:{
        marginLeft:10
    },
    content:{
        height:300,  
        marginHorizontal:15,
        marginTop:10,
    },
    contentViewDetails:{
        flexDirection:'row',
        height:40,
        marginTop:10,
        borderWidth:1,
        borderColor:'rgba(0, 153, 255,0.2)',
        alignItems:'center'
    },
    subViewDetailes:{
        borderRightWidth:1,
        borderColor:'rgba(0, 153, 255,0.2)',
        height:40,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 153, 255,0.2)'      
    },
    titleStyle:{
        fontSize:16,fontWeight:'bold',marginHorizontal:5
    },
    viewDescribe:{
        backgroundColor:'rgba(0, 153, 255,0.1)',
        height:40,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    contend:{
        height:200,
        marginTop:15,
        marginHorizontal:15
    },
    input:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderColor:'rgba(0, 153, 255,0.6)',
        padding: 5,
        fontSize: 16,
        paddingLeft:10,
        fontWeight: 'bold',
        marginBottom:10,
        borderRadius:5
    },
    btnLogin:{
        height:45,
        backgroundColor:'rgba(0, 153, 255,0.6)',
        marginTop:15,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    titleBtn:{
        color:'#fff',
        fontSize: 17,
        fontWeight:'bold'
    }
})
export default SessionDetails;