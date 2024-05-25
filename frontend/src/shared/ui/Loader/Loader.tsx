import { FC, memo } from 'react';

import cls from './Loader.module.scss';


export const Loader: FC = memo(() => {

    return (
        <div className={cls.loader}></div>
    );
});
