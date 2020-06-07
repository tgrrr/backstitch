import * as React from 'react';
import InputBaseStyled from './InputBaseStyled';
import { InputBase as MaterialInputBase } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const InputBase: React.FC<Props> = ({ children, className, ...rest }) => (
    <InputBaseStyled>
        <div className={['Inputbase', className && className].join(' ')} data-testid='Inputbase'>
            <MaterialInputBase {...rest}>
                {children}
            </MaterialInputBase>            
        </div>
    </InputBaseStyled>
);

export default InputBase;
