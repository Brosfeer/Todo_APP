import { fetchTodos } from '@/lib/todo_api';
import TodoItem from "@/components/TodoItem";
import useTodo from "@/hooks/useTodo";
import { ActivityIndicator, FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Index() {

  const { todos, errors, isLoading } = useTodo(fetchTodos);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (errors) {
    console.log(errors);
    return <Text>Error: {errors}</Text>;
  }


  return (
      <SafeAreaView >
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id }
          renderItem={({ item }) => (
            <TodoItem todo={item} isLoading={isLoading} />
          )}
            contentContainerStyle={{ paddingBottom: 100 }}

        />
              <StatusBar barStyle="dark-content" />
      </SafeAreaView>
  );
}
