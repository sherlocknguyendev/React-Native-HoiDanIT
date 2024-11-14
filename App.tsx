import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FlexBox from './components/flex.box';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ITodo {
  id: number,
  name: string
}

export default function App() {


  const [todo, setTodo] = useState('');
  const [listTodos, setListTodos] = useState<ITodo[]>([])

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert('Lỗi nhập', 'Todo đang để trống', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ]);
      return;
    };
    setListTodos([...listTodos, { id: getRandomArbitrary(1, 1000), name: todo }]);
    setTodo('')
  }

  const deleteTodo = (id: number) => {
    const newTodos = listTodos.filter(item => item.id !== id);
    setListTodos(newTodos);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <Text style={styles.header}>Todo List</Text>

        <View>

        </View>

        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title='Add Todo' onPress={() => handleAddTodo()} />


        <View style={styles.body}>
          <FlatList
            data={listTodos}
            keyExtractor={item => item.id + ""}
            renderItem={data => {
              return (
                <Pressable >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{data.item.name}  </Text>
                    <AntDesign onPress={() => deleteTodo(data.item.id)} name="close" size={24} color="black" />
                  </View>
                </Pressable>
              )
            }}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
    // <FlexBox />
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'grey',
    color: 'white',
    marginTop: 20,
    flex: 1,
    lineHeight: 75
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginHorizontal: 100,
    marginVertical: 10,

  },

  body: {
    margin: 15,
    flex: 8,
  },


  todoItem: {
    fontSize: 40,
    marginVertical: 10,
  },

  groupTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginBottom: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
  }

});
