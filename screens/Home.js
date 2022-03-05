import React, {Component} from "react";
import {Text,
        View,
        StyleSheet,
        SafeAreaView,
        TouchableOpacity,
        Platform,
        StatusBar
} from "react-native";
//import { greaterThan } from "react-native-reanimated";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}/>
               <View style={styles.titleBar}>
                 <Text style={styles.titleText}>¡Pantalla de Inicio!</Text>
               </View>
              <TouchableOpacity>
                  <Text>Ubicacion de la EEI</Text>
              </TouchableOpacity>


              </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android " ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex: 0.15,
        justifyContent:"center",
        alignItems: "center"
    },

})