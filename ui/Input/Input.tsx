import * as React from 'react';
import InputStyled from './InputStyled';
import { Input as MaterialInput } from '@material-ui/core';

interface Props {
    className?: string;
}

const Input: React.FC<Props> = ({ className, ...rest }) => (
    <InputStyled>
        <div className={['Input', className && className].join(' ')} data-testid='Input'>
            <MaterialInput {...rest} />           
        </div>
    </InputStyled>
);

export default Input;
