import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    ScrollView: {
        paddingBottom: 20,
        
    },
    SafeAreaView:{
        flex: 1,
        justifyContent:"center",
    },
    background:{
        flex:1,
        
        alignItems: "center",
        
    },
    page:{
        justifyContent:"center",
        alignContent:"center",
        marginTop: 300,
       
    },

    
    header: {
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        backgroundColor: "#11111E",
      
    },

    logoTopo: {
        width: "40%",
        height: 150,
        resizeMode: "contain"
    },

    body: {
        alignItems: "center",
        justifyContent: "center",
        //padding: 20,
        backgroundColor: "#11111E",
              
    },

    banner: {
        width: "100%",
        //height: "90%",
        //marginBottom: 20,
        resizeMode: "cover"
    },

    title: {
        fontSize: 28,
        color: "#FFFFFF",
        fontWeight: "bold",
        alignContent: "center",
        //marginBottom: 20
    },

    text: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "regular",
        alignContent: "center",
        marginBottom: 5
    },

    bodyContent: {
        paddingBottom: 20
    },
    buttonSubscribe:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "80%",
        borderRadius: 5,
        margin: 10,
    },
    buttonTextSubscribe:{
        color: "#11111E",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonLogin:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5BC2E7",
        padding: 20,
        width: "80%",
        borderRadius: 5,
        margin: 10
    },
    buttonTextLogin:{
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    

    
    footer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#11111E"
    },

    TextFooter:{
        color: "#5BC2E7",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },


});

export default styles;