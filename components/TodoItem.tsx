import { ITodo } from '@/types/ITodo';
import { StyleSheet, Text, View } from 'react-native';



type TodoItemProps = {
  todo: ITodo;
  isLoading: boolean;
};

const TodoItem = ({ todo, isLoading }: TodoItemProps) => {
  return (
    <View style={[styles.container, todo.completed && styles.containerCompleted]}>
      <View style={styles.meta}>
        <Text style={styles.label}>ID:</Text>
        <Text style={[styles.value, isLoading && styles.completed]}>
          {todo.id}
        </Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.label}>Task:</Text>
        <Text style={[styles.value, todo.completed && styles.completed]}>
          {todo.todo}
        </Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.label}>User ID:</Text>
        <Text style={[styles.value, todo.completed && styles.completed]}>
          {todo.userId}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3, // shadow on Android
    shadowColor: '#000', // shadow on iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  containerCompleted: {
    backgroundColor: '#e6e6e6',
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#555',
    width: 80,
  },
  value: {
    fontSize: 15,
    color: '#222',
    flexShrink: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TodoItem;
