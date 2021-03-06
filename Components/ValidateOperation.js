import React from "react"
import {Text, View, TextInput, TouchableOpacity, Alert} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
import {validateTransaction} from "../API/WalletApi"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"



class ValidateOperation extends React.Component {

    constructor(props){
        super(props);
        this.code="";
    }

    _codeInputChanged(text){
        this.code = text
    }

    _validate(){
        validateTransaction(parseInt(this.code), global.token)
            .then(response => {
                if(response.message != null){
                    Alert.alert("Succès", response.message,
                        [
                            {text: "OK", style: "cancel"}
                        ]);
                }
                else if (response.error != null){
                    Alert.alert("Echec", response.error,
                        [
                            {text: "Retour", style : "cancel"}
                        ]);
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
                                     contentContainerStyle={styles.main_container}>
                <View style={styles.phone_container}>
                    <Text style={styles.text}>Code de la transaction</Text>
                    <TextInput placeholder="Code"
                               onChangeText={(text) => this._codeInputChanged(text)}
                               autoFocus={false}
                               style={styles.input}
                               keyboardType="numeric"/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {this._validate()}}
                                      style={styles.button}>
                        <Text style={styles.button_text}>Valider </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = EStyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#ededed",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "$heightie",
        paddingRight: "$heightie"
    },
    phone_container: {
        height: "$height/5",
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
        paddingLeft: "$heightie/2",
        flex: 1
    },
    button_container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        paddingBottom: "$heightie"
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
});

export default ValidateOperation