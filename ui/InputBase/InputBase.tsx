import * as React from 'react';
import InputBaseStyled from './InputBaseStyled';
import { InputBase as MaterialInputBase } from '@material-ui/core';

interface Props {
    className?: string;
}

const InputBase: React.FC<Props> = ({ className, ...rest }) => (
    <InputBaseStyled>
        <div className={['Inputbase', className && className].join(' ')} data-testid='Inputbase'>
            <MaterialInputBase {...rest} />          
        </div>
    </InputBaseStyled>
);

export default InputBase;
