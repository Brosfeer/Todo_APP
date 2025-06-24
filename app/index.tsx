import LottieView from 'lottie-react-native';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItem,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TodoItem from '@/components/TodoItem';
import useAPICall from '@/hooks/useAPICall';
import { fetchTodos } from '@/lib/get_todo_api';
import { JSX } from 'react';
import {ITodo} from '@/types/ITodo'


// 👇 Define the type of a single Todo item


export default function Index(): JSX.Element {
  const { todos, errors, isLoading } = useAPICall<ITodo[]>(fetchTodos);
  const { height, width } = Dimensions.get('window');

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (errors) {
    return <Text>Error: {String(errors)}</Text>;
  }

  const renderItem: ListRenderItem<Todo> = ({ item }) => (
    <TodoItem todo={item} isLoading={isLoading} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        alignSelf: 'center',
        width: width * 0.3,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <LottieView
          autoPlay
          style={{
            width: width * 0.1,
            height: height * 0.3,
          }}
          source={require('@/assets/gir.json')}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.$id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
