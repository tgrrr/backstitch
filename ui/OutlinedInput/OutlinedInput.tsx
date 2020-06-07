import * as React from 'react';
import OutlinedInputStyled from './OutlinedInputStyled';
import { OutlinedInput as MaterialOutlinedInput } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const OutlinedInput: React.FC<Props> = ({ children, className, ...rest }) => (
    <OutlinedInputStyled>
        <div className={['Outlinedinput', className && className].join(' ')} data-testid='Outlinedinput'>
            <MaterialOutlinedInput {...rest}>
                {children}
            </MaterialOutlinedInput>            
        </div>
    </OutlinedInputStyled>
);

export default OutlinedInput;
