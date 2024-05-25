import { FC, memo } from 'react';

import { Page } from '@/widgets/Page/Page';
import { Loader } from '@/shared/ui/Loader';

import cls from './ProfilePage.module.scss';

export const ProfilePage: FC = memo(() => {

    return (
        <Page className={cls.LoaderPage}>
            ПРОФИЛЬ
            <Loader />
        </Page>
    );
});
