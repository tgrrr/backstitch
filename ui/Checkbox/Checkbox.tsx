import * as React from 'react';
import CheckboxStyled from './CheckboxStyled';
import { Checkbox as MaterialCheckbox } from '@material-ui/core';

interface Props
    {
        className?: string;
    }


const Checkbox: React.FC<Props> = ({ className, ...rest }) => (
    <CheckboxStyled>
        <div className={['Checkbox', className && className].join(' ')} data-testid='Checkbox'>
            <MaterialCheckbox {...rest} />
        </div>
    </CheckboxStyled>
);

export default Checkbox;
