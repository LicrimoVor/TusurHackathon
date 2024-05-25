import { FC, ReactElement, memo } from 'react';

import cls from './Link.module.scss';
import { Link as ReactLink } from 'react-router-dom';

type LinkVariant = 'outline';

interface LinkProps {
    content?: ReactElement,
    href: string,
    className?: string,
    variant?: LinkVariant,
}

export const Link: FC<LinkProps> = memo((
    props: LinkProps
) => {
    const {
        content,
        href,
        className = '',
        variant = 'outline',
    } = props

    return (
        <ReactLink to={href} className={`${cls.Link} ${cls[variant]} ${className}`}>
            {content}
        </ReactLink>
    );
});
