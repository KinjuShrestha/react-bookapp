import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { BorrowedContext } from '../../../borrowed/screen/borrowedContext';

export default function BookDetailScreen({ route }) {
  const { book } = route.params;
  const { borrowedBooks, borrowBook } = useContext(BorrowedContext);

  const handleBorrow = () => {
    if (borrowedBooks.length < 3) {
      borrowBook(book);
      Alert.alert(
        "Success!",
        `You have successfully borrowed "${book.name}".`,
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Limit Reached",
        "You cannot borrow more than three books.",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.coverPage }} style={styles.coverImage} />
      <Text style={styles.bookTitle}>{book.name}</Text>
      <Text style={styles.bookAuthor}>by {book.author}</Text>
      <Text style={styles.rating}>⭐ {book.rating}</Text>
      <Text style={styles.summaryLabel}>Summary:</Text>
      <Text style={styles.summary}>{book.summary}</Text>
      <TouchableOpacity style={styles.borrowButton} onPress={handleBorrow}>
        <Text style={styles.buttonText}>Borrow Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
  },
  coverImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  rating: {
    fontSize: 18,
    color: '#f39c12',
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  summary: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
  },
  borrowButton: {
    width: '80%',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
