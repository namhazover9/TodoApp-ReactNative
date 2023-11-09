import React, { useState } from "react";
import { 
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  View,
} from "react-native";
import Database from "../Database";

const SearchScreen = ({ navigation}) => {
  
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchTodo = async () => {
      try {
        const todos = await Database.getTodosByTitle(searchInput);
        setSearchResults(todos); // Cap nhat state voi ket qua tim kiem
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <View>
          <TextInput
            placeholder="Enter title..."
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
          />
          <Button title="Search" onPress={handleSearchTodo}/>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>               
                <Text>title: {item.title}</Text>
                <Text>description: {item.description}</Text>
              </View>
            )}
          />
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    label: {
      fontWeight: "bold",
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      marginBottom: 16,
      padding: 8,
    },
    addButton: {
      backgroundColor: "green",
      padding: 16,
      borderRadius: 4,
      alignItems: "center",
    },
    addButtonText: {
      color: "black",
      fontWeight: "bold",
    },
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
});
  

export default SearchScreen;