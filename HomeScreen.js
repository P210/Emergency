import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert } from 'react-native';
import firebase from 'firebase';
import AppHeader from '../component/AppHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
           <View style={styles.container}>
               <AppHeader/>
               <View>
                   <Text style={styles.textStyle}>Numbers
                                                  Police:Union Home Minister Rajnath Singh today launched 
                                                  a pan-India serviceof the single emergency helpline number 
                                                  '112' for immediate assistance services from police (100), 
                                                  fire (101), health (108) and women (1090)
                                                  
                                                  Ambulance:102
                                                  Personal Call:Call to your contacts</Text>

               <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CallPolice')}>
              <Text style={styles.buttonStyle}>Call Police</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CallAmbulance')}>
              <Text style={styles.buttonStyle}>Call Ambulance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('PersonalCall')}>
              <Text style={styles.buttonStyle}>Personal Call</Text>
            </TouchableOpacity>
               </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:'center',
        alignItems :'center'
    },
    buttons:{
        backgroundColor: 'blue',
        width : 200,
        height :50,
        borderRadius : 20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonStyle:{
    color :'black',
    fontSize: 20,
    fontWeight : 'bold'
    }
   

})