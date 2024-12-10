import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "John 1", age: 20 },
    { name: "John 2", age: 45 },
    { name: "John 3", age: 32 },
    { name: "John 4" , age: 27 },
    { name: "John 5", age: 54 },
    { name: "John 6", age: 33 },
    { name: "John 7", age: 19 },
    { name: "John 8", age: 47 },
    { name: "John 9", age: 20 },
  ];
  return (
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text >{item.name} - Age {item.age}</Text>;
        }}
      />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
