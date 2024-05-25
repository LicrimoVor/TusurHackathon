import { baseUrl } from "@/shared/const/api";
import { LOCAL_KEY_USER_AUTH } from "@/shared/const/localKey";
import { useGlobalContext } from "@/shared/context/global";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAppInit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { state, dispatch } = useGlobalContext();

    useEffect(() => {
        const isAuth = Boolean(localStorage.getItem(LOCAL_KEY_USER_AUTH));
        if (isAuth === undefined) {
            setIsLoading(false);
            return;
        }

        axios.get(`${baseUrl}/account/my`)
            .then((respone) => {
                const userData = respone.data;
                console.log(userData);
                dispatch({type: 'init', payload: userData})
                setIsLoading(false);
            })
            .catch((reason) => {
                console.log(reason);
                setIsLoading(false)
            })
    }, [])

    return [isLoading, state.isAuth];
}