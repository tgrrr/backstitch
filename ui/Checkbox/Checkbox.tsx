import * as React from 'react';
import CheckboxStyled from './CheckboxStyled';
import { Checkbox as MaterialCheckbox } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Checkbox: React.FC<Props> = ({ children, className, ...rest }) => (
    <CheckboxStyled>
        <div className={['Checkbox', className && className].join(' ')} data-testid='Checkbox'>
            <MaterialCheckbox {...rest}>
                {children}
            </MaterialCheckbox>            
        </div>
    </CheckboxStyled>
);

export default Checkbox;
