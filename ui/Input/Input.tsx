import * as React from 'react';
import InputStyled from './InputStyled';
import { Input as MaterialInput } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Input: React.FC<Props> = ({ children, className, ...rest }) => (
    <InputStyled>
        <div className={['Input', className && className].join(' ')} data-testid='Input'>
            <MaterialInput {...rest}>
                {children}
            </MaterialInput>            
        </div>
    </InputStyled>
);

export default Input;
