import { Alert } from "react-native";
import { useEffect, useState } from "react";

const useTodo = (fn: any) => {
    const [todos, setTodo] = useState([]);
    const [errors, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
        console.log("🔄 fetchData called", new Date().toISOString());
        try {
            setIsLoading(true);
            const response = await fn();
            // console.log('Fetched posts11111111111111111111111111111111111111111111111111111:', response);
            setTodo(response);
        } catch (error) {
            console.log('Error fetching posts:', error);
            setIsLoading(false);
            setError(error as any);
            
            Alert.alert('Error', error as any); 
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return { todos, errors, isLoading }
}

export default useTodo;