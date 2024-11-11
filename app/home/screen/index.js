import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { database } from '../../../firebase/firebase'; 
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const bookRef = ref(database, 'books');
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const booksList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setBooks(booksList);
      }
    });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
      <View style={style.bookContainer}>
        <Image source={{ uri: item.coverPage || 'https://via.placeholder.com/150' }} style={style.cover} resizeMode="cover" />
        <View style={style.itemText}>
          <Text style={style.bookName}>{item.name}</Text>
          <Text style={style.bookAuthor}>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <FlatList data={books} renderItem={renderItem} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: 150,
  },
  itemText: {
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  bookName: {
    fontSize: 20,
    paddingBottom: 10,
  },
  bookAuthor: {
    fontSize: 12,
    color: 'gray',
  },
  cover: {
    width: 90,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
});
