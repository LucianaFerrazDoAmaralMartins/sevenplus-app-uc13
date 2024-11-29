import React, { Component } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, Text, Image, Button, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/styles/styles-password.ts";
import { TextInput } from "react-native-gesture-handler";

class PasswordScreen extends Component {
    render() {
        return(
            <SafeAreaView style={ styles.SafeAreaView }>
                <StatusBar barStyle="light-content" backgroundColor="#6200ea" />
           
                  
                    <View style={ styles.header }>
                        <Image
                            source={ require("../assets/images/logo-topo.png") }
                            style={ styles.logoTopo }
                        />
                        <Text style={ styles.title }>Redefinir a senha</Text>
                          
                    </View>
                    <View style={ styles.body }>
                       <Text style={ styles.text }>Digite o endereço de e-mail que você usa </Text>
                       <Text style={ styles.text }> no SevenPlus para enviarmos um link</Text>
                       <Text style={ styles.text }>de redefinição de senha.</Text>


                       <Text style={ styles.textInput }>Endereço de e-mail</Text>
                       <TextInput style={ styles.input }></TextInput>

                                           
                      <TouchableOpacity
                          style={ styles.buttonSend }
                      >  
                      <Text style={ styles.buttonTextSend }>Envie</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                          onPress={ () => this.props.navigation.navigate("Login") }
                          style={ styles.buttonCancel }
                      >  
                      <Text style={ styles.buttonTextCancel }>Cancele</Text>
                      </TouchableOpacity>
                       
                    </View>
                             
              
            </SafeAreaView>
        );
    }
  }
  
  export default PasswordScreen;