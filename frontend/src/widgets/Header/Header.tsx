import { FC, memo, useCallback } from 'react';

import { useGlobalContext } from '@/shared/context/global';
import LogoSvg from '@/shared/assets/logo.svg';
import cls from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Role } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { adminUrl } from '@/shared/const/api';

interface Item {
    href: string,
    isAuth: boolean,
    isAdmin: boolean,
    text: string,
}

const ItemsHeader: Item[] = [
    {
        href: '/',
        text: 'Главная страница',
        isAuth: false,
        isAdmin: false,
    },
    {
        href: '/profile',
        text: 'Профиль',
        isAuth: true,
        isAdmin: false,
    },
    {
        href: '/groups',
        text: 'Каталог групп',
        isAuth: true,
        isAdmin: false,
    },
]


export const Header: FC = memo(() => {

    const { state: { userData, isAuth}, dispatch } = useGlobalContext();

    const onClick = useCallback(() => {
        dispatch({type: 'logout'})
    }, [dispatch])

    return (
        <div className={cls.Header}>
            <div className={cls.top}>
                <div className={cls.wrapperTop}>
                    <Link to='/'>
                        <img src={LogoSvg} className={cls.logo} />
                    </Link>
                    {userData && <Link to='/profile'>
                        <Text text={`${userData?.first_name} ${userData?.last_name}`} vartiant='middle' />
                    </Link>}
                    
                </div>
                {isAuth
                    ? <button onClick={onClick}>
                        <Text text='Выйти' vartiant='middle' />
                    </button>
                    : <Link to='/login'>
                        <Text text='Войти' vartiant='middle' />
                    </Link> 
                }
            </div>
            <div className={cls.bottom}>
                {ItemsHeader.map((item) => {
                    console.log(isAuth)
                    if (item.isAuth? !isAuth: false) {
                        return null;
                    }

                    return (
                        <Link
                            to={item.href}
                            className={cls.item}
                            key={item.href}
                        >
                            <Text text={item.text} inverted vartiant='middle'/>
                        </Link>
                    )
                })}
                {userData?.role === Role.ADMIN && (
                    <a className={cls.item} href={adminUrl}>
                        <Text text='Админ панель' inverted vartiant='middle'/>
                    </a>
                )}
            </div>
        </div>
    );
});
