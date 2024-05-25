import { FC, memo } from 'react';

import cls from './Text.module.scss';

type TextVariant = 'normal'| 'middle' | 'title' | 'error';

interface TextProps {
    className?: string,
    text?: string,
    vartiant?: TextVariant,
    inverted?: boolean,
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        vartiant = 'normal',
        text = '',
        inverted,
    } = props;


    return (
        <div className={`
            ${cls.text}
            ${cls[vartiant]}
            ${inverted && cls.inverted}
            ${className}
        `}>
            {text}
        </div>
    );
});
