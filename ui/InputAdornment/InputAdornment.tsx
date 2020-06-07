import * as React from 'react';
import InputAdornmentStyled from './InputAdornmentStyled';
import { InputAdornment as MaterialInputAdornment } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const InputAdornment: React.FC<Props> = ({ children, className, ...rest }) => (
    <InputAdornmentStyled>
        <div className={['Inputadornment', className && className].join(' ')} data-testid='Inputadornment'>
            <MaterialInputAdornment {...rest}>
                {children}
            </MaterialInputAdornment>            
        </div>
    </InputAdornmentStyled>
);

export default InputAdornment;
