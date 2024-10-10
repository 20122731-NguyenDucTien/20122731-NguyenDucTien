import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email', completed: true },
    { id: '2', title: 'UI task web page', completed: true },
    { id: '3', title: 'Learn javascript basic', completed: true },
    { id: '4', title: 'Learn HTML Advance', completed: true },
    { id: '5', title: 'Medical App UI', completed: true },
    { id: '6', title: 'Learn Java', completed: true },
  ]);

  const [email, setEmail] = useState('');

  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Checkbox
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleCompleted(item.id)}
      />
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity>
        <Entypo name="pencil" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (


<View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
            <View>
              <Text style={styles.productTitle}>9:41</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
              <Image source={{ uri: 'https://img.icons8.com/?size=100&id=86261&format=png&color=000000' }} style={styles.icon}></Image>
              <Image source={{ uri: 'https://img.icons8.com/?size=100&id=GipX25zpk6Sw&format=png&color=000000' }} style={styles.icon}></Image>
              <Image source={{ uri: 'https://img.icons8.com/?size=100&id=RWI7FmaJwq3A&format=png&color=000000' }} style={styles.icon}></Image>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=357&format=png&color=000000' }} style={styles.icon3}></Image>
            <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5df03bfe3dee818e01f05399a3622737' }} style={styles.icon2}></Image>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center' }}>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=7695&format=png&color=000000' }} style={styles.icon3}></Image>
            <TextInput
              style={styles.input}
              placeholder="search"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

      <View style={{ flex: 6 }}>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
        />
      </View>
      <View style={{ flex :1 , justifyContent:'center',flexDirection:'center',alignItems:'center'}}>
      <Image
    source={{ uri:'https://img.icons8.com/?size=100&id=ZBL8mQveY4Pz&format=png&color=000000'}} style={styles.container}
    ></Image>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    top: 4,
    left: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E0E0E0',
    padding: 6,
    borderRadius: 6,
    marginBottom: 6,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 12,
    height: 12,
    top: 2,
    left: -3,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  icon2: {
    width: 251,
    height: 50,
    top: 4,
    left: 1,
  },
  input: {
    fontSize: 14,
    padding: 4,
    color: 'black',
  },
  icon3: {
    width: 20,
    height: 20,
    fontWeight: 'bold',
    top: 2,
    left: 3,
    color: '#DDDDDD',
  },
});
