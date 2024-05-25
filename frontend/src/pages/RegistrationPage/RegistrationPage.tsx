import { FC, memo } from 'react';

import { Page } from '@/widgets/Page/Page';

import cls from './RegistrationPage.module.scss';
import { RegistrationForm } from '@/features/RegistrationForm';

export const RegistrationPage: FC = memo(() => {

    return (
        <Page className={cls.LoaderPage}>
            <RegistrationForm />
        </Page>
    );
});
