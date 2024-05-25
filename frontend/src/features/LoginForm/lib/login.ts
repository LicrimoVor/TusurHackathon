import { baseUrl } from "@/shared/const/api";
import { useGlobalContext } from "@/shared/context/global";
import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {dispatch} = useGlobalContext()


    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        setError('');
        axios.post(`${baseUrl}/login`, {
            login: email,
            password
        })
            .then((response) => {
                // console.log(response.status)
                dispatch({ type: 'login', payload: response.data })
                window.location.assign('/');
            })
            .catch((reason) => {
                console.log(reason)
                setIsLoading(false)
                setError('Произошла ошибка авторизации.')
            })
    }
    
    return { isLoading, error, onLogin }
}