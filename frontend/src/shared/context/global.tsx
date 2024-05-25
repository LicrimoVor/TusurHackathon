import { User } from "@/entities/User";
import { ReactElement, Reducer, createContext, useContext, useReducer } from "react";
import { LOCAL_KEY_USER_AUTH } from "../const/localKey";
import { userTest } from "@/entities/User/test/data";

interface GlobalContext {
    isAuth: boolean,
    userData?: User,
}

type IActionType = 'logout' | 'init' | 'login'

interface Action {
    type: IActionType,
    param?: keyof GlobalContext,
    payload?: unknown,
}

const globalContext = createContext<{
    state: GlobalContext,
    dispatch: (value: Action) => void,
}>({
    state: {isAuth: false},
    dispatch: () => {}
});

const initValue: GlobalContext = {
    isAuth: true,
    userData: userTest,
}

export const globalReducer: Reducer<GlobalContext, Action> = (state, action) => {
    switch (action.type) {
        case 'logout': {
            localStorage.removeItem(LOCAL_KEY_USER_AUTH)
            return {
                ...state,
                userData: undefined,
                isAuth: false,
            };
        }
        case 'login': {
            const userData = action.payload as User;
            localStorage.setItem(LOCAL_KEY_USER_AUTH, 'true')
            return {
                ...state,
                userData,
                isAuth: true,
            };
        }
        case 'init': {
            return {
                ...state,
                userData: action.payload as User,
                isAuth: true,
            }
        }
    }
}

export const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
    const [state, dispatch] = useReducer(globalReducer, initValue);
    return <globalContext.Provider value={{state, dispatch}}>{children}</globalContext.Provider>
}

export const useGlobalContext = () => useContext<{state: GlobalContext, dispatch: (value: Action) => void}>(globalContext);
