import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Alert } from 'react-native';
import firebase from 'firebase';

export default class SignUpScreen extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      password:'',
      comfirmPassword:'',
    }
  }
  userSignUp=(emailId,password,comfirmPassword)=>{
   if(password!==comfirmPassword){
     return Alert.alert("Password does not match")
   }
   else{
     firebase.auth().createUserWithEmailAndPassword(emailId,password)
     .then(response=>{
       return Alert.alert("Acount created sucessfully")
     })
     .catch(error=>{
       var errorCode = error.code 
       var errorMessage = error.message
       return Alert.alert(errorMessage)
     })
   }
  }
  render(){
    return(
      <View style={styles.container}>
    <TextInput style={styles.inputBox}
    placeholder= 'Enter EmailId'
    keyboardType = 'email-address'
    onChangeText={(text)=>{
      this.setState({
        emailId:text
      })
    }}
    />
    <TextInput style={styles.inputBox}
    placeholder= 'Enter password'
    secureTextEntry={true}
    onChangeText={(text)=>{
      this.setState({
        password:text
      })
    }}
    />
    <TextInput style={styles.inputBox}
    placeholder= 'Confirm Password'
    secureTextEntry={true}
    onChangeText={(text)=>{
      this.setState({
        comfirmPassword:text
      })
    }}
    />
    <TouchableOpacity style={styles.buttonstyle}
    onPress={()=>{
      this.userSignUp(this.emailId,this.password,this.comfirmPassword)

    }}>
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
       </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
flex :1,
        justifyContent:'center',
        alignItems :'center'
  },
  inputBox:{
     borderWidth: 2,
        borderColor:'black',
        width: 200,
        height:40,
        marginVertical:10
  },
  buttonstyle:{
     backgroundColor: 'blue',
        width : 200,
        height :50,
        borderRadius : 20,
        alignItems:'center',
        justifyContent:'center'
  },
  buttonText:{
    color :'black',
    fontSize: 20,
    fontWeight : 'bold'
  },
})