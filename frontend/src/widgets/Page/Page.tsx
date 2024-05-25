import { FC, ReactElement, memo } from 'react';

import cls from './Page.module.scss';

interface PageProps {
    children?: ReactElement,
    className?: string,
}

export const Page: FC<PageProps> = memo((props: PageProps) => {
    const {
        children,
        className = '',
    } = props;

    return (
        <div className={`${cls.Page} ${className}`}>
            {children}
        </div>
    );
});
