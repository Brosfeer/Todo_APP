import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

function useAPICall<T>(fn: () => Promise<T>) {
  const [todos, setTodo] = useState<T | null>(null);
  const [errors, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log('🔄 fetchData called', new Date().toISOString());
      setIsLoading(true);

      const response = await fn();
      setTodo(response);
    } catch (error: unknown) {
      console.log('Error fetching data:', error);
      const message = error instanceof Error ? error.message : String(error);
      setError(message);
      Alert.alert('Error', message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { todos, errors, isLoading };
}

export default useAPICall;
