
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyle } from "../../utils/const";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import ModalCreate from "./modal.create";

interface IReview {
    id: number,
    title: string,
    star: number
}


const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        margin: 15

    },
    home: {
        fontSize: 30
    }
})

const HomeScreen = () => {

    const [reviews, setReview] = useState<IReview[]>([
        { id: 1, title: 'ReactNative', star: 5 },
        { id: 2, title: 'Chess', star: 5 }
    ]);
    const navigation: NavigationProp<RootStackParamList> = useNavigation(); // sd hook thay vì truyền props

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>

            <Text style={[styles.home, globalStyle.globalFont]}>HomeScreen</Text>

            <View style={{ alignItems: 'center' }}>
                <Entypo name="plus" size={40} color="black" onPress={() => setModalVisible(true)} />
            </View>

            <View>
                <FlatList
                    keyExtractor={(item) => item.id + ''}
                    data={reviews}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <ModalCreate
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </View>


    )
}

export default HomeScreen;