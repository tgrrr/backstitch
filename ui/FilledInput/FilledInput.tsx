import * as React from 'react';
import FilledInputStyled from './FilledInputStyled';
import { FilledInput as MaterialFilledInput } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const FilledInput: React.FC<Props> = ({ children, className, ...rest }) => (
    <FilledInputStyled>
        <div className={['Filledinput', className && className].join(' ')} data-testid='Filledinput'>
            <MaterialFilledInput {...rest}>
                {children}
            </MaterialFilledInput>            
        </div>
    </FilledInputStyled>
);

export default FilledInput;
