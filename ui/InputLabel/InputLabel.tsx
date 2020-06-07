import * as React from 'react';
import InputLabelStyled from './InputLabelStyled';
import { InputLabel as MaterialInputLabel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const InputLabel: React.FC<Props> = ({ children, className, ...rest }) => (
    <InputLabelStyled>
        <div className={['Inputlabel', className && className].join(' ')} data-testid='Inputlabel'>
            <MaterialInputLabel {...rest}>
                {children}
            </MaterialInputLabel>            
        </div>
    </InputLabelStyled>
);

export default InputLabel;
