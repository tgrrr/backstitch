import * as React from 'react';
import InputAdornmentStyled from './InputAdornmentStyled';
import { InputAdornment as MaterialInputAdornment } from '@material-ui/core';

interface Props {
    children: string | React.ReactNode;  // The content of the component, normally an IconButton or string.
    className?: string;
    position: 'start' | 'end';
}

const InputAdornment: React.FC<Props> = ({
    children,
    className,
    position,
    ...rest
}) => (
    <InputAdornmentStyled>
        <div className={['Inputadornment', className && className].join(' ')} data-testid='Inputadornment'>
            <MaterialInputAdornment 
                position={position}
                {...rest}
            >
                {children}
            </MaterialInputAdornment>            
        </div>
    </InputAdornmentStyled>
);

export default InputAdornment;
