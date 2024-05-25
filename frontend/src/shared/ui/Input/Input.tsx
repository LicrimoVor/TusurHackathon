import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback } from 'react';

import cls from './Input.module.scss';

type HtmlIputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange"
>;


interface InputProps extends HtmlIputProps {
    className?: string,
    onChange?: (val: string) => void,
}


export const Input: FC<InputProps> = memo((
    props: InputProps
) => {
    const {
        className = '',
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
        
    }, [onChange]);

    return (
        <input
            onChange={onChangeHandler}
            className={`${cls.input} ${className}`}
            {...otherProps}
        />
    );
});
