import {createStackNavigator, createDrawerNavigator, createAppContainer} from "react-navigation"
import Login from "../Components/Login"
import Home from "../Components/Home"
import Testie from "../Components/Testie"
import translate from "../utils/language"

const drawie = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Accueil",
            drawerLabel: "Accueil",
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
    },
    Test : {
        screen: Testie,
        navigationOptions: {
            title: "Testie",
            drawerLabel: "Test",
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


const stackie = createStackNavigator({
    Login: {
        screen : Login,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: drawie,
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

export default createAppContainer(stackie)