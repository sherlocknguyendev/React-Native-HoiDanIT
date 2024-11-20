

import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";


const styles = StyleSheet.create({
    font: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    }
})




const DetailScreen = () => {

    const navigation: NavigationProp<RootStackParamList> = useNavigation(); // sd hook thay vì truyền props
    const route: RouteProp<RootStackParamList, 'Detail'> = useRoute();

    return (
        <View>

            <Text>ID: {route.params?.id}</Text>
            <Text>Title: {route.params?.title}</Text>
            <Text>Rating: {route.params?.star}</Text>

            <Button title="Go Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default DetailScreen;