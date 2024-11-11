import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { BorrowedContext } from './borrowedContext';

export default function BorrowedScreen() {
  const { borrowedBooks, returnBook } = useContext(BorrowedContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={borrowedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookCard}>
            <Text style={styles.bookTitle}>{item.name}</Text>
            <Text style={styles.bookAuthor}>by {item.author}</Text>
            <TouchableOpacity style={styles.returnButton} onPress={() => returnBook(item)}>
              <Text style={styles.buttonText}>Return Book</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No borrowed books</Text>}
        contentContainerStyle={borrowedBooks.length === 0 ? styles.emptyContainer : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  bookCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  returnButton: {
    marginTop: 10,
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
});
