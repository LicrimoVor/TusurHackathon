import { FC, memo } from 'react';

import { Page } from '@/widgets/Page/Page';
import { Loader } from '@/shared/ui/Loader';

import cls from './LoaderPage.module.scss';

export const LoaderPage: FC = memo(() => {

    return (
        <Page className={cls.LoaderPage}>
            <Loader />
        </Page>
    );
});
