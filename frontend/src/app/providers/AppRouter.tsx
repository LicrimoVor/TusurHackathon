import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { FC, ReactElement, Suspense, memo } from 'react';

import { Route, Routes } from 'react-router-dom';

interface AppRouterProps {
    isAuth: boolean,
}

interface AppRoute {
    path: string,
    element: ReactElement,
    isAuth: boolean,
}

const routes: AppRoute[] = [
    {
        path: '/',
        element: <MainPage/>,
        isAuth: false,
    },
    {
        path: '/login',
        element: <LoginPage/>,
        isAuth: false,
    },
    {
        path: '/registration',
        element: <RegistrationPage/>,
        isAuth: false,
    },
    {
        path: '/profile',
        element: <ProfilePage/>,
        isAuth: true,
    },
    {
        path: '/groups',
        element: <div>main</div>,
        isAuth: true,
    },
    {
        path: '/groups/:id',
        element: <div>main</div>,
        isAuth: true,
    },
    {
        path: '/groups/:id/events/:id',
        element: <div>main</div>,
        isAuth: true,
    },
    {
        path: '/groups/:id/discussion/:id',
        element: <div>main</div>,
        isAuth: true,
    },
    {
        path: '/*',
        element: <MainPage/>,
        isAuth: false,
    },
]


export const AppRouter: FC<AppRouterProps> = memo((props: AppRouterProps) => {
    const {
        isAuth,
    } = props;

    return (
        <Routes>
            {routes.map((route) => {

                if (route.isAuth ? !isAuth : false) {
                    return null;
                }

                const element = <Suspense>{route.element}</Suspense>
                
                return <Route path={route.path} element={element} key={route.path}/>

            })}
        </Routes>
    );
});
