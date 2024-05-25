import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { FC, memo, useCallback, useState } from 'react';

import cls from './LoginForm.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Link } from '@/shared/ui/Link';
import { useLogin } from '../lib/login';
import { Loader } from '@/shared/ui/Loader';

interface LoginData {
    email: string,
    password: string,
}

export const LoginForm: FC = memo(() => {
    const [loginData, setLoginData] = useState<LoginData>({
        password: '',
        email: '',
    });
    
    const {
        isLoading,
        error,
        onLogin,
    } = useLogin()


    const onChangeEmail = useCallback((value: string) => {
        setLoginData({...loginData, email: value})
    }, [loginData])

    const onChangePassword = useCallback((value: string) => {
        setLoginData({...loginData, password: value})
    }, [loginData])

    const onLoginHandler = useCallback(() => {
        onLogin(loginData.email, loginData.password)
    }, [loginData, onLogin])

    if (isLoading) {
        return <div className={cls.LoginForm}><Loader/></div>
    }

    return (
        <div className={cls.LoginForm}>
            <Text
                text='Вход в систему'
                vartiant='title'
            />
            <Input
                value={loginData.email}
                placeholder='Email'
                className={cls.input}
                type='email'
                onChange={onChangeEmail}
            />
            <Input
                value={loginData.password}
                placeholder='Пароль'
                className={cls.input}
                type='password'
                onChange={onChangePassword}
            />
            <Button
                content={<Text text='Войти' inverted/>}
                className={cls.btn} variant='filled'
                onClick={onLoginHandler}
            />
            <Link
                href='/registration'
                content={<Text text='Зарегистрироваться' />}
                className={cls.btn}
            />
            {error && ( 
                <div className={cls.error}>
                    <Text text={error} vartiant='error'/>
                </div>
            )}
        </div>
    );
});
