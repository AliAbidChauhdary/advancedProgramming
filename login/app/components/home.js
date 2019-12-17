import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native';


class Home extends Component{

    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }

    checkLogin(){
        const {username, password} = this.state;

        if(username == 'admin' && password == 'admin'){
            this.props.navigation.navigate('dashboard');
        }
        else {
            Alert.alert("Error", "Password/Username mismatch", [{
                text : "Okay"
            }])
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login to the System</Text>
                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                selectionColor='blue'
                placeholder="Username"
                onChangeText = {text => this.setState({username:text})}
                ></TextInput>
                <TextInput style={styles.inputBox}
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                selectionColor='blue'
                placeholder="Password"
                onChangeText = {text => this.setState({password:text})}
                ></TextInput>

                <Button title="Login" onPress={() => this.checkLogin()}></Button>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:"center"
    },
    heading : {
        fontSize:30,
        textAlign:"center"
    },
    input : {
        marginHorizontal: 20
    },
    inputBox : {
        width : 300,
        backgroundColor : '#eee',
        borderRadius : 25,
        paddingHorizontal : 16,
        fontSize : 16,
        color : '#002f6c',
        marginVertical : 10
    }
})

