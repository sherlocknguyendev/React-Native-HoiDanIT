import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
    if (!todo) return;
    setListTodos([...listTodos, { id: getRandomArbitrary(1, 1000), name: todo }]);
    setTodo('')
  }

  const deleteTodo = (id: number) => {
    const newTodos = listTodos.filter(item => item.id !== id);
    setListTodos(newTodos);
  };

  return (
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
              <Pressable onPress={() => deleteTodo(data.item.id)}>
                <Text style={styles.todoItem}>{data.item.name}</Text>
              </Pressable>
            )
          }}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'grey',
    color: 'white',
    marginTop: 20
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
    marginVertical: 15

  },
  body: {
    margin: 15,
  },

  todoItem: {
    backgroundColor: 'pink',
    fontSize: 40,
    marginVertical: 10,
    padding: 5
  }

});
