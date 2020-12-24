import * as React from 'react';
import {StyleSheet , Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
 
export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      contact:'',
      age:'',
      address:'',
      city:'',
      state:'',
      country:'',
      pincode:'',
      work:'',
        }
    }
  
    render(){
        return(
            <View style={styles.container}>
                  <TextInput 
        style={styles.InputBox}
        placeholder={'First Name'}
        onChangeText={(text)=>{
            this.setState({
                firstName:text
            })

            }}
            value={this.state.firstName}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'Last Name'}
        onChangeText={(text)=>{
            this.setState({
                lastName:text
            })

            }}
            value={this.state.lastName}
            />
             <TextInput 
        style={styles.InputBox}
        placeholder={'Age'}
        maxLength={3}
        keyboardType={"numeric"}
        onChangeText={(text)=>{
            this.setState({
                age:text
            })

            }}
            value={this.state.age}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'Contact'}
        maxLength={10}
        keyboardType={"numeric"}
        onChangeText={(text)=>{
            this.setState({
                contact:text
            })

            }}
            value={this.state.contact}
            />
               <TextInput 
        style={styles.InputBox}
        placeholder={'Address'}
        multiline={true}
        onChangeText={(text)=>{
            this.setState({
                address:text
            })

            }}
            value={this.state.address}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'City'}
        onChangeText={(text)=>{
            this.setState({
                city:text
            })

            }}
            value={this.state.city}
            />
           <TextInput 
        style={styles.InputBox}
        placeholder={'State'}
        onChangeText={(text)=>{
            this.setState({
                state:text
            })

            }}
            value={this.state.state}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'Country'}
        onChangeText={(text)=>{
            this.setState({
                country:text
            })

            }}
            value={this.state.country}
            />
        <TextInput 
        style={styles.InputBox}
        placeholder={'Enter Email Id'}
        onChangeText={(text)=>{
            this.setState({
                emailId:text
            })

            }}
            value={this.state.emailId}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'Enter password'}
        secureTextEntry={true}
        onChangeText={(text)=>{
            this.setState({
                password:text
            })

            }}
            value={this.state.password}
            />
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    var email =this.state.emailId
                    var password = this.state.password
                    firebase.auth().signInWithEmailAndPassword(email,password)
                    .then(()=>{
                        this.props.navigation.navigate("HomeScreen")
                    })
                    .catch(error=>{
                        var errorCode = error.Code
                        var errorMessage = error.Message
                        return Alert.alert("Log in correctly")
                    })
                }}>
                 <Text>Rejister</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("signUpScreen")
                }}>
                 <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      inputBox:{
        borderWidth: 2,
           borderColor:'black',
           width: 200,
           height:40,
           marginVertical:10
     },
     button:{
        backgroundColor: 'blue',
           width : 200,
           height :50,
           borderRadius : 20,
           alignItems:'center',
           justifyContent:'center'
     },
})