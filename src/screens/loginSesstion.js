import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,TextInput,TouchableOpacity} from 'react-native';
import Slider from '../component/slide';
import {useNavigation} from '@react-navigation/native';



function LoginSession(){
    
        const navigation = useNavigation();
        const {width} = Dimensions.get('window');
       return(
            <View style={styles.container}>
                <View style={styles.slider}>
                    <ScrollView
                    horizontal
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}>
                    {/* <Slider img={require('../assets/image/MeetingRoom.jpg')} /> */}
                    <Slider img={require('../assets/image/TrainingRoom.jpg')} />
                    </ScrollView>
                </View>

                <View style={styles.contend}>
                    <TextInput 
                        placeholder="كودالجلسة..."
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => navigation.navigate('sessionDetails')}
                    >
                        <Text style={styles.titleBtn}>دخول للحساب</Text>
                    </TouchableOpacity>
                </View>

            </View>
       )
   

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    slider: {
        
        backgroundColor: '#fff',
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
        fontWeight: 'bold'
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
export default LoginSession;