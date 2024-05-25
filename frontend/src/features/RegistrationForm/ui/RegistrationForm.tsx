import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { FC, memo, useCallback, useState } from 'react';

import cls from './RegistrationForm.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Link } from '@/shared/ui/Link';
import { useRegistration } from '../lib/registration';
import { Loader } from '@/shared/ui/Loader';
import { RegistrationData } from '../types/registration';

export const RegistrationForm: FC = memo(() => {
    const [registrationData, setRegistrationData] = useState<RegistrationData>({
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        password_repeat: '',
    });
    
    const {
        isLoading,
        error,
        onRegistration,
    } = useRegistration()


    const onChangeParam = useCallback((params: keyof RegistrationData) => (
        (value: string) => setRegistrationData({...registrationData, [params]: value})
    ), [registrationData])

    const onRegistrationHandler = useCallback(() => {
        onRegistration(registrationData);
    }, [registrationData, onRegistration])

    if (isLoading) {
        return <div className={cls.LoginForm}><Loader/></div>
    }

    return (
        <div className={cls.RegistrationForm}>
            <Text
                text='Регистрация'
                vartiant='title'
            />
            <Input
                value={registrationData.last_name}
                placeholder='Фамилия'
                className={cls.input}
                onChange={onChangeParam('last_name')}
            />
            <Input
                value={registrationData.first_name}
                placeholder='Имя'
                className={cls.input}
                onChange={onChangeParam('first_name')}
            />
            <Input
                value={registrationData.middle_name}
                placeholder='Отчество'
                className={cls.input}
                onChange={onChangeParam('middle_name')}
            />
            <Input
                value={registrationData.email}
                placeholder='E-mail'
                className={cls.input}
                onChange={onChangeParam('email')}
            />
            <Input
                value={registrationData.password}
                placeholder='Пароль'
                className={cls.input}
                type='password'
                onChange={onChangeParam('password')}
            />
            <Input
                value={registrationData.password_repeat}
                placeholder='Подтвержедние пароля'
                type='password'
                className={cls.input}
                onChange={onChangeParam('password_repeat')}
            />
            <Button
                content={<Text text='Регистрация' inverted/>}
                className={cls.btn} variant='filled'
                onClick={onRegistrationHandler}
            />
            <Link
                href='/login'
                content={<Text text='Войти' />}
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
