import { FC, ReactElement, memo } from 'react';

import cls from './Button.module.scss';

type ButtonVariant = 'outline' | 'filled';

interface ButtonProps {
    content?: ReactElement,
    onClick?: () => void,
    className?: string,
    variant?: ButtonVariant,
}

export const Button: FC<ButtonProps> = memo((
    props: ButtonProps
) => {
    const {
        content,
        onClick,
        className = '',
        variant = 'outline',
    } = props

    return (
        <button className={`${cls.button} ${cls[variant]} ${className}`} onClick={onClick}>
            {content}
        </button>
    );
});
