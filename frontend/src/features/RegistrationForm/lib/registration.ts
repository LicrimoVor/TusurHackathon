import { baseUrl } from "@/shared/const/api";
import { useGlobalContext } from "@/shared/context/global";
import axios from "axios";
import { useState } from "react";
import { RegistrationData } from "../types/registration";

export const useRegistration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {dispatch} = useGlobalContext()


    const onRegistration = (data: RegistrationData) => {
        if (data.password !== data.password_repeat) {
            setError('Пароли не совпадают!');
            return;
        }
        
        setIsLoading(true);
        setError('');
        axios.post(`${baseUrl}/registration`, {data})
            .then((response) => {
                dispatch({ type: 'login', payload: response.data })
                window.location.assign('/');
            })
            .catch((reason) => {
                console.log(reason)
                setIsLoading(false)
                setError('Произошла ошибка авторизации.')
            })
    }
    
    return { isLoading, error, onRegistration }
}