import React, { Component } from 'react';
import {View,Text ,StyleSheet,Image} from 'react-native';


class Profile extends Component {  
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={require('../assets/image/child.jpg')} style={styles.image}/>
                    <View style={{flexDirection:'column',flex:1,height:60}}>
                        <View style={styles.viewName}>
                            <Text style={styles.name}>الاسم :</Text>
                            <Text style={styles.name}>محمد </Text>
                        </View>
                        <View style={styles.viewName}>
                                <Text style={styles.name}>اسم الجلسة :</Text>
                                <Text style={styles.name}>اجتماع </Text>
                        </View>  
                    
                    </View>
                </View>
                <View style={styles.profileDetails}>
                    
                </View>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 153, 255,0.1)',
        
    },
    imageContent:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderColor:'rgba(0, 153, 255,0.4)',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        
    },
    image:{
        width:100,
        height:100,
        borderWidth:1,
        borderRadius: 50,
        borderColor:'rgba(0, 153, 255,0.8)',
        marginBottom: 10
    },
    profileDetails:{
        marginTop: 20
    },
    viewName:{
        flexDirection:'row',
        flex:1,
        height:30,
        backgroundColor:'rgba(0, 153, 255,0.2)',
        marginLeft:5,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderColor:'rgba(0, 153, 255,0.8)',
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        marginHorizontal:3
    }
})
export default Profile;