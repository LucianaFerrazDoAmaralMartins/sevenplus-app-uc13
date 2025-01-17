import React, { Component } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, Text, Image, Button, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/styles/styles-login";
import { TextInput } from "react-native-gesture-handler";

class LoginScreen extends Component {
    render() {
        return(
            <SafeAreaView style={ styles.SafeAreaView }>
                <StatusBar barStyle="light-content" backgroundColor="#6200ea" />
           
                  
                    <View style={ styles.header }>
                        <Image
                            source={ require("../assets/images/logo-topo.png") }
                            style={ styles.logoTopo }
                        />
                        <Text style={ styles.title }>Entrar</Text>
                          
                    </View>
                    <View style={ styles.body }>
                       <Text style={ styles.text }>Digite o endereço de e-mail e a senha </Text>
                       <Text style={ styles.text }>da sua conta SevenPlus</Text>

                       <Text style={ styles.textInput }>Endereço de e-mail</Text>
                       <TextInput style={ styles.input }></TextInput>

                       <Text style={ styles.textInput }>Senha</Text>
                       <TextInput style={ styles.input }></TextInput>

                       <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("Password") }
                       >  
                      <Text style={ styles.TextFooter }>Esqueceu sua senha?</Text>
                      </TouchableOpacity> 
                       
                      <TouchableOpacity
                          style={ styles.buttonLogin }
                      >  
                      <Text style={ styles.buttonTextLogin }>Entrar</Text>
                      </TouchableOpacity>
  
                       
                    </View>
                                         
            </SafeAreaView>
        );
    }
  }
  
  export default LoginScreen;