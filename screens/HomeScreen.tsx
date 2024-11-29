import React, { Component } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, Text, Image, Button, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/styles/styles-home";

class HomeScreen extends Component {
  render() {
      return(
          <SafeAreaView style={ styles.SafeAreaView }>
              <StatusBar barStyle="light-content" backgroundColor="#6200ea" />
            <ImageBackground style={styles.background} source={require('../assets/images/banner.png')}>

              <ScrollView style={ styles.ScrollView }>
                <View style={ styles.page }>
                  <View style={ styles.header }>
                      <Image
                          source={ require("../assets/images/logo-topo.png") }
                          style={ styles.logoTopo }
                      />
                      <Text style={ styles.title }>Iniciar o streaming agora</Text>
                      <Text style={ styles.title }>agora</Text>


                  </View>
                  <View style={ styles.body }>
                     <Text style={ styles.text }>Prepare-se para curtir as melhores</Text>
                     <Text style={ styles.text }>histórias da TV e do cinema.</Text>

                     
                     <TouchableOpacity
                        style={ styles.buttonSubscribe }
                    >  
                    <Text style={ styles.buttonTextSubscribe }>Assinar agora</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={ styles.buttonLogin }
                        onPress={ () => this.props.navigation.navigate("Login") }
                    >  
                    <Text style={ styles.buttonTextLogin }>Entrar</Text>
                    </TouchableOpacity>

                     
                  </View>
                  <View style={ styles.footer }>
                          <Text style={ styles.TextFooter }>
                          © 2024 Seven Plus. Todos os direitos reservados.
                          </Text>
                  </View>
                  </View>
              </ScrollView>
            </ImageBackground>
          </SafeAreaView>
      );
  }
}

export default HomeScreen;