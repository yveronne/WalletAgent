import React from "react"
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from "react-navigation"
import {Image, StyleSheet} from "react-native"
import Login from "../Components/Login"
import WaitingList from "../Components/WaitingList"
import Testie from "../Components/Testie"
import ValidateOperation from "../Components/ValidateOperation"
import Menu from "../Components/Menu"
import translate from "../utils/language"

const tabbie = createBottomTabNavigator({
    WaitingList: {
        screen: WaitingList,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image source={require("../Images/clock.png")} style={styles.icon}/>
            },
            tabBarLabel: "File d'attente"
        }
    },
    OperationValidation: {
        screen: ValidateOperation,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image source={require("../Images/validate.jpg")} style={styles.icon}/>
            },
            tabBarLabel: "Validation d'opération"
        }
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image source={require("../Images/hamburger.png")} style={styles.icon}/>
            },
            tabBarLabel: "Menu"
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: "#FF0000",
        inactiveTintColor: "#000000",
        activeBackgroundColor: "#ededed"
    }
});

const stackie = createStackNavigator({
    Login: {
        screen : Login,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: tabbie,
        navigationOptions: {
            // title: "Accueil",
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF"
            },
            headerLeft: null
        }
    }

});

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
});

export default createAppContainer(stackie)