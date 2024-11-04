import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [students, setStudents] = useState([
    { id: 1, name: 'VanQuoc', age: 18 },
    { id: 2, name: 'LazyBoy', age: 19 },
    { id: 3, name: 'Hello', age: 20 },
  ])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>Hello World</Text>

      <FlatList
        data={students}
        keyExtractor={item => item.id + ""}
        renderItem={(data) => {
          return (
            <View key={data.item.id} style={{ padding: 30, backgroundColor: 'pink', marginBottom: 30 }}>
              <Text>{data.item.name}</Text>
            </View>
          )
        }}
      >


      </FlatList>

      {/* <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id} style={{ padding: 30, backgroundColor: 'pink', marginBottom: 30 }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20
  },

});
