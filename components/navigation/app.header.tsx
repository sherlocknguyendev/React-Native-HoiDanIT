
import { Text, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';



const AppHeader = () => {
    return (
        <View>
            <Entypo name="menu" size={24} color="black" />
            <Text>Hello Guys</Text>
        </View>
    )
}

export default AppHeader