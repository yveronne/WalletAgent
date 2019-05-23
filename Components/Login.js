import React from "react"
import {View, Image, Text, TextInput, TouchableOpacity, Alert} from "react-native"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import EStyleSheet from "react-native-extended-stylesheet"
import translate from "../utils/language"
import {setLocale , getCurrentLocale} from "../utils/language"
import {logUser} from "../API/WalletApi"

class Login extends React.Component {

    constructor(props){
        super(props);

        this.username="";
        this.password="";
    }

    _login(usernme, pass){
        logUser(usernme, pass)
            .then((data) => {
                if(data.hasOwnProperty("token")){
                    global.token = data.token;
                    global.merchantPointID = data.merchantPointID;
                    this.props.navigation.navigate("WaitingList");

                }
                else{
                    var values = Object.values(data);
                    Alert.alert("Erreur", values[0][0],
                        [
                            {text: "Retour", style : "cancel"}
                        ]);

                }
            })
            .catch((error) => console.log(error))
    }

    _usernameInputChanged(text){
        this.username = text
    }

    _passwordInputChanged(text){
        this.password = text
    }

    _changeLanguage(){
        if(getCurrentLocale() === "fr"){
            setLocale("en")
        }
        else {
            setLocale("fr")
        }
        this.forceUpdate()
    }

    _displayFlag(){
        if(getCurrentLocale() === "fr"){
            return (
                <Image source={require("../Images/ic_flag_England.png")}
                       style={styles.flag}
                       resizeMode="contain"/>
            )
        }
        else {
            return (
                <Image source={require("../Images/flag-france.jpg")}
                       style={styles.flag}
                       resizeMode="contain"/>
            )
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
                                     contentContainerStyle={styles.main_container}>
                <Image style={styles.logo}
                       source={require("../Images/afrilandcmr.jpg")}
                       resizeMode="contain"/>
                <View style={styles.welcome_text_container}>
                    <Text style={styles.home_text}> Connexion </Text>
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Nom d'utilisateur</Text>
                    <TextInput style={styles.input} placeholder="Entrez votre nom d'utilisateur"
                               onChangeText={(text) => this._usernameInputChanged(text)}/>
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Mot de passe</Text>
                    <TextInput style={styles.input} placeholder="Entrez votre mot de passe"
                               onChangeText={(text) => this._passwordInputChanged(text)}
                               secureTextEntry={true}/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {this._login(this.username, this.password)}}
                                      style={styles.button}>
                        <Text style={styles.button_text}> Se connecter </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.language}>
                    <TouchableOpacity style={styles.language_touchable} onPress={() => {this._changeLanguage()}}>
                        {this._displayFlag()}
                        <Text style={styles.flag_text}> {translate("HOME_language")} </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = EStyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: "column",
        padding : "$heightie",
        backgroundColor: "#ededed"
    },
    logo:{
        flex: 1,
        height: undefined,
        width: "$width",
    },
    welcome_text_container:{
        flex: 1,
        justifyContent: "center",
    },
    home_text:{
        fontSize: "4.3rem",
        textAlign: "center"
    },
    input_container: {
        flex: 1,
        marginBottom: "$heightie",
        paddingTop: "$heightie",
        paddingBottom: "$heightie"
    },
    text: {
        fontSize: "2.2rem",
        color: "#000000",
        fontWeight: "bold",
        paddingBottom: "$heightie"
    },
    input: {
        borderRadius: 5,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0.5,
        paddingLeft: "$heightie",
        flex: 1
    },
    button_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#FF0000",
        borderRadius: 10,
        height: 50,
        width: "$width/1.5",
        justifyContent: "center"
    },
    button_text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: "2.3rem"
    },
    language:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    language_touchable: {
        alignItems: "center"
    },
    flag:{
        height: 30,
    },
    flag_text:{
        textDecorationLine: "underline"
    }
});

export default Login