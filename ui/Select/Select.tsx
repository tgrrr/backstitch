import * as React from 'react';
import SelectStyled from './SelectStyled';
import { Select as MaterialSelect } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Select: React.FC<Props> = ({ children, className, ...rest }) => (
    <SelectStyled>
        <div className={['Select', className && className].join(' ')} data-testid='Select'>
            <MaterialSelect {...rest}>
                {children}
            </MaterialSelect>            
        </div>
    </SelectStyled>
);

export default Select;
