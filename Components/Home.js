import React from "react"
import {View, Text} from "react-native"

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam("token")}</Text>
            </View>
        )
    }
}

export default Home