import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    ScrollView: {
        paddingBottom: 20,
     
    },
    SafeAreaView:{
        flex:1,
        justifyContent:"center",
         backgroundColor: "#11111E"
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
    input: {
        backgroundColor: "#262644",
        height: 50,
        width:"80%",
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#2d88e2",

    },
    textInput:{
        width:"80%",
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "regular",
        alignItems: "flex-start",
        marginBottom: 5,
        marginTop:20,

    }, 
    buttonSend:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2d88e2",
        padding: 20,
        width: "80%",
        height: 60,
        borderRadius: 5,
        margin: 10,
        marginTop: 10,
    },
    buttonTextSend:{
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonCancel:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2a2547",
        padding: 20,
        width: "80%",
        height: 60,
        borderRadius: 5,
        margin: 10,
        marginTop: 10,
    },
    buttonTextCancel:{
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },

});

export default styles;