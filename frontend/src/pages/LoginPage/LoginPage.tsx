import { Page } from '@/widgets/Page/Page';
import { FC, memo } from 'react';

import cls from './LoginPage.module.scss';
import { LoginForm } from '@/features/LoginForm';
import { useGlobalContext } from '@/shared/context/global';


export const LoginPage: FC = memo(() => {

    const { state: {isAuth} } = useGlobalContext();

    if (isAuth) {
        window.location.assign('http://localhost:3000/');
    }

    return (
        <Page className={cls.LoginPage}>
            <LoginForm/>
        </Page>
    );
});
