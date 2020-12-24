import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert , SafeAreaView} from 'react-native';
import call from 'react-native-phone-call';
import {AntDesign} from '@expo/vector-icons';


export const App =()=>{
    const [inputValue,setInputValue]=useState('')
    const triggerCall =()=>{
        if(inputValue.length!=3){
            Alert.alert("Please enter correct digits")
            return 
        }
        const args = {
            number:inputValue,
            prompt:true
        }
        //We have to do alert message for error in line 19
        call(args)
    }
    return(
        <SafeAreaView style={styles.container}>
         <Text style={styles.titleText}>Emergency Call to Ambulance</Text>
         <View style={styles.container}>
          <TextInput style={styles.inputBox}
             placeholder={'Example:123'}
             keyboardType={'numeric'}
             onChangeText={(inputValue)=>{
                 setInputValue(inputValue)
             }}
          />
          <TouchableOpacity
          onPress={()=>{
              {triggerCall}
          }}>
            
          </TouchableOpacity>
         </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText:{
        color :'black',
        fontSize: 30,
        fontWeight : 'bold'
    },
    inputBox:{
        borderWidth: 2,
        borderColor:'black',
        width: 200,
        height:40,
        marginVertical:10
    }
  
  });