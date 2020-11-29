import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Alert } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Milk",
    },
    {
      id: 2,
      text: "Eggs",
    },
    {
      id: 3,
      text: "Butter",
    },
    {
      id: 4,
      text: "Juice",
    },
    {
      id: 5,
      text: "Bread",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item");
    } else {
      setItems((prevItems) => {
        return [{ id: Math.floor(Math.random() * 100), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.img}
      ></Image> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  // text: {
  //   color: "darkslateblue",
  //   fontSize: 30,
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
});
