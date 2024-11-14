import { StyleSheet, Text, View } from "react-native"

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <Text>Flex Box</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
})

export default FlexBox;